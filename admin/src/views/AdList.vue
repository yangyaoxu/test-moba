<template>
  <div>
    <h1>广告位列表</h1>
   <el-table :data="items">
    <el-table-column prop="_id" label="id" width="230"></el-table-column>
     <el-table-column prop="name" label="名称"></el-table-column>
     <el-table-column fixed="right" label="操作" width="200">
       <template slot-scope="scope">
        <el-button
        type="text"
        size="small"
        @click="$router.push(`/ads/edit/${scope.row._id}`)"
        >编辑</el-button>
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
   }
  },
  methods: {
   async fetch() {
      const res = await this.$http.get('/reset/ads')
      this.items = res.data
    }
  },
  created() {
    this.fetch()
  },
}
</script>
