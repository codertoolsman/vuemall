import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/category',
    component: () => import('@/views/category/category.vue')
  },
  {
    path: '/shopcart',
    component: () => import('@/views/shopcart/shopcart.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/profile/profile.vue')
  },
  {
    path: '/detail',
    component: () => import('@/views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

// 3.导出router
export default router