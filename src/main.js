import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
import {post,fetch,patch,put} from './axios/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('TABS')) { //判断本地是否存在
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
