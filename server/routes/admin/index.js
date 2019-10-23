module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams: true //合并参数
    })
    //创建资源
    router.post('/', async (req, res) => {
        const data = await req.Model.create(req.body)
        res.send(data)
    })
    // 查看数据
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if(req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const data = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(data)
    })
   // 根据id获取数据
   router.get('/:id', async (req, res) => {
       const model = await req.Model.findById(req.params.id)
       res.send(model)
   })

   // 根据id 修改数据
   router.put('/:id', async (req, res) => {
       const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
       res.send(model)
   })
   // 根据id 删除数据
   router.delete('/:id', async (req, res) => {
       const model =  await req.Model.findByIdAndDelete(req.params.id)
       res.send(model)
   })


   //登录效验中间件
   const resourceMiddleware = require('../../middleware/resource')
   const authMiddleware = require('../../middleware/auth')
    app.use('/admin/api/reset/:resource',authMiddleware(),resourceMiddleware(),router)

   //图片上传
   const multer = require('multer')
   const upload = multer({dest: __dirname + '/../../uploads'})
   app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async(req, res) => {
       const file = req.file
       file.url = `http://localhost:3000/uploads/${file.filename}`
       res.send(file)
   })

    //登录验证
    app.post('/admin/api/login', async (req, res) => {
       const { username, password } = req.body
    //    1.根据用户名找用户
       const user = await AdminUser.findOne({username}).select('+password')
        assert(user, 422, '用户不存在')
      //2.校验密码
      const isValid = require('bcrypt').compareSync(password, user.password)
         assert(isValid, 422, '密码错误')
          //3.返回token
         const token = jwt.sign({ id: user._id }, app.get('secret'))
         res.send({ token })
    })

    //错误处理函数
    app.use(async (err, req, res, next) => {
        //console.log(err)
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
   }