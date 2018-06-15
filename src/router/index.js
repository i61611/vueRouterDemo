import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import phone from '@/components/phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/:id',
      name: ':id',
      component: phone
    }
  ]
})
