<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
         <el-table-column prop="_id" label="id" width="230"></el-table-column>
         <el-table-column prop="title" label="标题"></el-table-column>
         <el-table-column fixed="right" label="操作" width="200">
           <template slot-scope="scope">
               <el-button
                type="text"
                size="small"
                @click="$router.push(`/articles/edit/${scope.row._id}`)"
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
        const res = await this.$http.get('/reset/articles')
        this.items = res.data
    }
  },
  created() {
    this.fetch()
  },
}
</script>
