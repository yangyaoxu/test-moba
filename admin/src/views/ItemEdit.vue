<template>
  <div>
    <h1>{{this.id ? "编辑" : "新增"}}物品</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action= "uploadUrl"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
    afterUpload(res) {
      this.$set(this.model, 'icon', res.url)
    },
    async save() {
      if(this.id) {
           await this.$http.put(`/reset/items/${this.id}`, this.model)
      } else {
           await this.$http.post('/reset/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: "success",
        message: "保存成功"
      })
    },
    async fetch() {
     const res = await this.$http.get(`/reset/items/${this.id}`)
     this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  },
}
</script>
<style>
</style>
