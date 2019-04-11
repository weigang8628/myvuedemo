<template>
  <div class="header">
    <!-- <el-dropdown>
      <i class="el-icon-setting" size='medium' style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    您好，<span style="margin-right: 15px"><b>{{userName}}</b></span>欢迎登陆系统！
    <!-- <el-button type="danger" round>退出</el-button> -->
    <!-- <el-button type="text">个人设置</el-button> -->
    <el-button type="text" @click="exitfn">退出</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        userName:JSON.parse(sessionStorage.getItem('USERNAME')),
    };
  },
  methods: {
    exitfn() {
      this.$confirm('确认要退出系统吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //   清楚所有session
        sessionStorage.clear()
        window.location.reload()//刷新重置vuex的数据（清空）
        // 跳转到首页
        this.$router.replace({
          path: '/',

        })
        
      })
    }
  }
};
</script>

<style lang="less" scoped>
.header {
}
</style>


