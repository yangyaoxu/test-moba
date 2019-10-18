<template>
  <div>
    <h1>{{this.id ? "编辑" : "新增"}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
       <el-form-item label="所属分类">
              <el-select v-model="model.categories" multiple>
                <el-option 
                v-for="items in categories" 
                :key="items._id"
                :label="items.name"
                :value="items._id"
                ></el-option>
              </el-select>
       </el-form-item>
       <el-form-item label="标题">
         <el-input v-model="model.title"></el-input>
       </el-form-item>
       <el-form-item label="详情">
       <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"> </vue-editor>
       </el-form-item>
       <el-form-item>
         <el-button native-type="submit" type="primary">保存</el-button>
       </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
   props: {
     id: {}
   },
   components: {
     VueEditor
  },
  data() {
    return {
      model: {},
      categories: [],
    }
  },
  methods: {
    async save() {
         if(this.id) {
        await this.$http.put(`/reset/articles/${this.id}`, this.model)
         } else {
        await this.$http.post('/reset/articles', this.model)
         }
         this.$router.push('/articles/list')
         this.$message({
           type: 'success',
           message: '保存成功'
         })
    },
    async fetchCategories () {
         const res = await this.$http.get('/reset/categories')
         this.categories = res.data
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('/upload', formData)
       Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async fetch() {
      const res = await this.$http.get(`/reset/articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetchCategories()
    this.id && this.fetch()
  },
}
</script>