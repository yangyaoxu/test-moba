<template>
  <div>
    <h1>{{this.id ? "编辑": "新增"}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
  <el-form-item label="上级分类">
    <el-select v-model="model.parent">
      <el-option v-for="items in parents" :key="items._id" :label="items.name" :value="items._id"></el-option>
    </el-select>
      </el-form-item>
      <el-form-item label="名称">
    <el-input v-model="model.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button native-type="submit" type="primary">保存</el-button>

  </el-form-item>
</el-form>
  </div>
</template>
<script>
  export default {
    props:{
      id: {}
    },
    data() {
      return {
        model: {},
        parents: []
      }
    },
    methods: {
     async save() {
       if(this.id) {
        await this.$http.put(`/reset/categories/${this.id}`, this.model)
       } else {
        await this.$http.post('/reset/categories', this.model)
       }
       this.$router.push("/categories/list")
       this.$message({
         type: "success",
         message: "保存成功"
       })
      },
      async fetch() {
       const res = await this.$http.get(`/reset/categories/${this.id}`)
       this.model = res.data
      },
      async fetchCategory() {
        const res = await this.$http.get('/reset/categories')
        this.parents = res.data
      }
    },
    created() {
      this.fetchCategory()
      this.id && this.fetch()
    },
  }
</script>


