import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Register from  '@/components/Login/register'
import HelloWorld from '@/components/helloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/hello',
      name:'hello',
      component:HelloWorld

    }
  ]
})
