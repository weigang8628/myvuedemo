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
          <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%;" @click="login" :loading="loading" >登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { apiLogin } from '../axios/config'
export default {
  name: 'home',
  data() {
    return {
      form: {},
      username: '',
      password: '',
      loading:false
    }
  },
  created(){
  },
  methods: {
    login() {
      if (this.username == '' || this.password == '') {
        this.$alert('用户名或密码不能为空！', '提示', {
          confirmButtonText: '确定',
        });
      } else {
        let formdata = {
          userName: this.username,
          password: this.password
        }
        this.loading = true;
        this.$post(apiLogin, formdata)
          .then((res) => {
            console.log(res)
            this.loading = false;
            let data = res.data;
            if (res.code == 0) {

              let navs = data.menu;
              let newnavs = []

              navs.map((item, index) => {
                if (item.parentMenuId == '') {
                  //一级  
                  let obj1 = {
                    id: item.id,
                    wfid:item.mobileWfId,
                    title: item.menuName,
                    index: String(index + 1),
                    path: item.mobileUrl,
                    icon:item.mobileIcon,
                    plugsuserid:item.plugsUserId,
                    menuurl:item.menuUrl,
                  }
                  newnavs.push(obj1)
                  //二级
                  let nav2 = newnavs[index].children = []
                  let k = 0;
                  navs.map((item2, index2) => {
                    if (item.id == item2.parentMenuId) {
                      k += 1;
                      let j = 0;
                      let obj2 = {
                        id: item2.id,
                        wfid:item2.mobileWfId,
                        title: item2.menuName,
                        index: String((index + 1) + '-' + (k)),
                        path: item2.mobileUrl,
                        icon:item2.mobileIcon,
                        plugsuserid:item2.plugsUserId,
                        menuurl:item2.menuUrl,
                      }
                      nav2.push(obj2)
                      //  三级菜单
                      obj2.children = []
                      navs.map((item3, index3) => {
                        if (obj2.id == item3.parentMenuId) {
                          j += 1;
                          let obj3 = {
                            id: item3.id,
                            wfid:item3.mobileWfId,
                            index: String((index + 1) + '-' + (k) + '-' + (j)),//拼接需要的index的结构1-1-1
                            title: item3.menuName,
                            path: item3.mobileUrl,
                            icon:item3.mobileIcon,
                            plugsuserid:item3.plugsUserId,
                            menuurl:item3.menuUrl,
                          }
                          obj2.children.push(obj3)
                        }
                      })
                    }
                  })
                }
              })
              sessionStorage.setItem('MENU', JSON.stringify(newnavs))//缓存处理后的三级菜单
              sessionStorage.setItem('SESSIONID', JSON.stringify(data.sid))//缓存sessionid
            // sessionStorage.setItem('SESSIONID', JSON.stringify(data.sid))//缓存sessionid
              sessionStorage.setItem('USERNAME', JSON.stringify(data.userModel.userName))//缓存当前用户名
              this.$store.commit('MENU',newnavs)//整体菜单存入vuex
              this.$store.commit('TABS',[])//整体菜单存入vuex
              console.log('all-nav', data.menu);
              // 登录成功
              this.$router.replace({
                path: '/Home/List',
                query: {
                  id: '1-1-3',
                //   currentid:'2c9110d167ba9f3d0167bb5395fe0028'
                }
              })
              console.log('newnav', newnavs);
            } else {
              this.$alert(res.msg, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  this.username = ''
                  this.password = ''
                }
              });
            }
          })
      }
    },

  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less" scoped>
.logo {
  text-align: center;
  padding: 10px 0;
}
.login {
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
.home {
  border-radius: 10px;
  box-shadow: 0 0 10px #cccccc;
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


