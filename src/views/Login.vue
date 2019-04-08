<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="home">
          <div class="logo">
              <img src="../assets/logo.png" alt="" srcset="">
          </div>
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      form: {},
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
    //     this.$fetch('/api/v2/movie/top250')
    //   .then((response) => {
    //     console.log(response)
    //   })
      if (this.username == 'aaa' && this.password == '123') {
        this.$router.push({
          path: '/Home/Main',
          query: {
            id: '1-1'
          }
        })
        var bb = []
        sessionStorage.setItem('TABS', JSON.stringify(bb))
      } else {
        this.$message.error('用户名或这密码不对，请重新输入！');
        this.username = ''
          this.password = ''
      }
    },

  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less" scoped>
.logo{
text-align: center;
padding: 10px 0;
}
.login{
    background-color: #e6e6e6;
    height: 100%;
}
    // .home{
    //     width: 400px;
    //     height: 300px;
    //     background-color: antiquewhite;
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     margin: auto;
    // }
    // .home{
    //      width: 400px;
    //      height: 300px;
    //      position: absolute;
    //      left: 50%;
    //      top: 50%;
    //      transform: translate(-50%,-50%);
    //      background-color: #ff0000;
    // }
    .home{
        border-radius: 10px;
        box-shadow:  0 0 10px #cccccc;
         width: 400px;
         height: 300px;
         padding: 20px;
         position: absolute;
         left: 50%;
         top: 50%;
         margin-left: -200px;
         margin-top: -150px;
         background-color: #ffffff;
    }
</style>


