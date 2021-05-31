import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/home.vue')
  },
  {
    path: '/message',
    name: '消息中心',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/message.vue')
  },
  {
    path: '/my',
    name: '我的',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/my.vue')
  },
  {
    path: '/cart',
    name: '购物车',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/cart.vue')
  },
  {
    path: '/storeDetail',
    name: '商品详情',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/storeDetail.vue')
  },
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //    this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.

  // }
]

const router = new VueRouter({
  routes
})

export default router