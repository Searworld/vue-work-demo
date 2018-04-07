import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: () => import('../view/home.vue')
    },
    {
      path: '/article',
      component: () => import('../view/article.vue')
    },
    {
      path: '/about',
      component: () => import('../view/about.vue')
    }
  ]
})
