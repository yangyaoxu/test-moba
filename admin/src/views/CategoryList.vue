<template>
  <el-table :data="items" style="width: 100%">
    <el-table-column prop="_id" label="日期" width="230"></el-table-column>
    <el-table-column prop="parent.name" label="上级分类"></el-table-column>
    <el-table-column prop="name" label="分类名称"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
       items: []
    };
  },
  methods: {
    async categoriesfetch() {
         const res = await this.$http.get('/reset/categories')
         this.items = res.data
    },
    async remove(row) {
      await this.$http.delete(`/reset/categories/${row._id}`)
      this.$message({
        type: "success",
        message: "删除成功"
      })
      this.categoriesfetch()
    }
  },
  created() {
      this.categoriesfetch()
  },
};
</script>