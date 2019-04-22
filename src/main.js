import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import './assets/css/base.css'
Vue.use(ElementUI);
import qs from 'qs';
Vue.prototype.$qs = qs;
import {post,fetch,patch,put} from './axios/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('MENU')) { //判断本地是否存在
      next();
    } else {
      if (to.path === '/') {
        next();
      } else {
        next({
          path: '/'
        })
      }
    }
  }
  else {
    next();
  }

  // /*如果本地 存在 则 不允许直接跳转到 登录页面*/
  // if (to.fullPath == "/") {
  //   if (sessionStorage.getItem('sessionid')) {
  //     next({
  //       path: from.fullPath
  //     });
  //   } else {
  //     next();
  //   }
  // }
});
// 过滤器，清楚icon冒号
Vue.filter('qcmh', function(el){
        return  el.charAt(0) == ':'? el.substring(1):el
    })
    
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
