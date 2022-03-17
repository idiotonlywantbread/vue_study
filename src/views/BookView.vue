<template>
  <div>
    <table>
      <tr>
        <td>编号</td>
        <td>名字</td>
        <td>作者</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BookView",
  created(){
    this.$axios.get('http://localhost:8123/book/findAll/').then(function(resp){
      console.log(resp)
      // _this.tableData = resp.data.content
      // _this.pageSize = resp.data.size
      // _this.total = resp.data.totalElements
    })
  }
}
</script>

<style scoped>

</style>