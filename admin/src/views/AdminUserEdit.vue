<template>
  <div>
    <h1>{{this.id ? '编辑' : '新增'}} 管理员</h1>
    <el-form @submit.native.prevent="save" width="120">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async save() {
       if(this.id) {
          await this.$http.put(`/reset/admin_users/${this.id}`, this.model)
       } else {
         await this.$http.post('/reset/admin_users', this.model)
       }
       this.$router.push('/admin_users/list')
       this.$message({
         type: 'success',
         message: '保存成功'
       })
    },
    async adminUserFetch() {
    const res = await this.$http.get(`/reset/admin_users/${this.id}`)
    this.model = res.data
  },

  },

  created() {
    this.id && this.adminUserFetch()
  },
}
</script>
