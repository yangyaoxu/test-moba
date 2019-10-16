<template>
<div>
  <h1>物品列表</h1>
  <el-table :data="items" style="width: 100%">
    <el-table-column prop="_id" label="日期" width="230"></el-table-column>
    <el-table-column prop="name" label="物品名称"></el-table-column>
    <el-table-column prop="icon" label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height:3rem;">
        </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/items/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

  <script>
export default {
  data() {
    return {
       items: []
    };
  },
  methods: {
    async itemsfetch() {
         const res = await this.$http.get('/reset/items')
         this.items = res.data
    },
    async remove(row) {
      await this.$http.delete(`/reset/items/${row._id}`)
      this.$message({
        type: "success",
        message: "删除成功"
      })
      this.itemsfetch()
    }
  },
  created() {
      this.itemsfetch()
  },
};
</script>
