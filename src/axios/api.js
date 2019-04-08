import config from "./config.js";
export default{
 login:function(){
    this.$axios({
        method:'post',
        url:'api',
        data:this.qs.stringify({    //这里是发送给后台的数据
              userId:this.userId,
              token:this.token,
        })
    }).then((response) =>{          //这里使用了ES6的语法
        console.log(response)       //请求成功返回的数据
    }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
    })
 }
}