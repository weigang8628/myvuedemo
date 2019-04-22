<template>
  <div class="home">
    <div id="nav">
      <div id="logo">
        <img src="../assets/logo.png" alt="" srcset="">
      </div>
      <el-container :style="{height:height+'px'}">

        <el-aside width="200px">
          <nav1></nav1>

        </el-aside>

        <el-container>

          <el-header style="text-align: right; font-size: 12px">
            <header1></header1>
          </el-header>
          <tabs></tabs>
          <el-main>
            <el-scrollbar :style="{height:height-146+'px'}">
            <router-view></router-view>
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import tabs from '../components/Tabs.vue'
import header1 from '../components/Header.vue'
import nav1 from '../components/Nav.vue'
export default {
  data() {
    return {
      height: ""
    };
  },
  mounted() {
    let that = this;
    this.height = document.documentElement.clientHeight;
    window.onresize = function temp() {
      that.height = document.documentElement.clientHeight;
    };
  },
  components: {
    tabs,
    header1,
    nav1
  }
};
</script>

<style lang="less">
#logo {
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  width: 200px;
  z-index: 1;
  box-sizing: border-box;
}
.el-scrollbar {
  //   height: 100%;
}
.el-scrollbar__wrap {
  overflow: scroll;
  overflow-x: hidden !important;
}
body {
  padding: 0;
  margin: 0;
}
#nav {
  a {
    // font-weight: bold;
    // color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .el-header {
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
    //   box-shadow: 0 0 5px #cccccc;
    border-bottom: 1px solid #e6e6e6;
  }

  .el-aside {
    color: #333;
    margin-top: 60px;
    border-right: 1px solid #e6e6e6;
  }
  .el-menu {
    border-right: 1px;
  }
}
</style>