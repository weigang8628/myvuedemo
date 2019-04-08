import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
      path:'/Home',
      name:'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
      meta: { requireAuth: true },
      children:[{
        path:'Main',
        name:'Main',
        component: () => import(/* webpackChunkName: "Main" */ '../views/Main.vue'),
        meta: { requireAuth: true },
      },{
        path:'List',
        name:'List',
        component: () => import(/* webpackChunkName: "List" */ '../views/List.vue'),
        meta: { requireAuth: true },
      },{
        path:'List1',
        name:'List1',
        component: () => import(/* webpackChunkName: "List1" */ '../views/List1.vue'),
        meta: { requireAuth: true },
      },
    ]
    },
    
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
