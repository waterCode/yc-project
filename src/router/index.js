import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Register from  '@/components/Login/register'
import homePage from  '@/components/Login/homePage'
import joinUsPage from '@/components/Login/joinUsPage'
import joinCompetition from '@/components/user/joinCompetition'
import gradePage from '@/components/user/gradePage'
import memberListPage from '@/components/admin/memberList'
import participantList from '@/components/admin/participantList'
import userCenterPage from '@/components/admin/userCenterPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/joinUsPage',
      name: 'joinUsPage',
      component: joinUsPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/joinCompetition',
      name:'joinCompetition',
      component:joinCompetition
    },
    {
      path:'/gradePage/:data',
      name:'gradePage',
      component:gradePage
    },
    {
      path:'/memberListPage',
      name:'memberListPage',
      component:memberListPage
    },
    {
      path:'/participantList',
      name:'participantList',
      component:participantList
    },
    {
      path:'/userCenterPage',
      name:'userCenterPage',
      component:userCenterPage,
      children:[
        {
          path:'a',
          component:participantList
          },
          {
          path:'b',
          component:participantList
          }
          ]
    }



  ]
})
