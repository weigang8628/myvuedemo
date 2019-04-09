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
import { apiLogin } from '../axios/config'
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
      if (this.username == '' || this.password == '') {
        this.$alert('用户名或密码不能为空！', '提示', {
          confirmButtonText: '确定',
        });
      } else {
        let formdata = {
          userName: this.username,
          password: this.password
        }
        this.$post(apiLogin, formdata)
          .then((res) => {
            console.log(res)
            let data = res.data;
            if (res.code == 0) {
              // 登录成功
              this.$router.push({
                path: '/Home/Main',
                query: {
                  id: '1-1'
                }
              })
              sessionStorage.setItem('MENU', JSON.stringify(data.menu))
              sessionStorage.setItem('SESSIONID', JSON.stringify(data.sid))
              console.log('all-nav', data.menu);
              let navs = data.menu;
              let newnavs = []

              navs.map((item, index) => {
                if (item.parentMenuId == '') {
                  //一级  
                  let obj1 = {
                    id: item.id,
                    title: item.menuName,
                    index: String(index + 1),
                    path: item.mobileUrl,
                  }
                  newnavs.push(obj1)
                  //二级
                  let nav2 = newnavs[index].children = []
                  let k = 0;
                  navs.map((item2, index2) => {
                    if (item.id == item2.parentMenuId) {
                      k+=1;
                      let j = 0;
                      let obj2 = {
                        id: item2.id,
                        title: item2.menuName,
                        index: String((index + 1) + '-' + (k)),
                        path: item2.mobileUrl,
                      }
                      nav2.push(obj2)
                      //  333333
                      obj2.children = []
                      navs.map((item3, index3) => {
                        if (obj2.id == item3.parentMenuId) {
                            j+=1;
                          let obj3 = {
                            id: item3.id,
                            index: String((index + 1) + '-' + (k)+ '-' + (j)),
                            title: item3.menuName,
                            path: item3.mobileUrl,
                          }
                          obj2.children.push(obj3)
                        }
                      })



                      // let nav3 = nav2[i].children = []
                      //   navs.map((item3, index3) => {
                      //       if(item2.id == item3.parentMenuId){
                      //          nav3.push({
                      //              title: item3.menuName,
                      //     path: item3.mobileUrl,
                      //          })

                      //       }
                      //   })
                    }
                  })
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

      //   if (this.username == 'aaa' && this.password == '123') {
      //     this.$router.push({
      //       path: '/Home/Main',
      //       query: {
      //         id: '1-1'
      //       }
      //     })
      //     var bb = []
      //     sessionStorage.setItem('TABS', JSON.stringify(bb))
      //   } else {
      //     this.$message.error('用户名或这密码不对，请重新输入！');
      //     this.username = ''
      //       this.password = ''
      //   }
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


