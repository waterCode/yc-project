import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Register from  '@/components/Login/register'
import homePage from  '@/components/HelloWorld'
import joinUsPage from '@/components/joinus/joinus'
import joinCompetition from '@/components/user/joinCompetition'
import gradePage from '@/components/user/gradePage'
import memberListPage from '@/components/admin/memberList'
import joinUsList from '@/components/admin/joinUsList'
import participantList from '@/components/admin/participantList'
import userCenterPage from '@/components/admin/userCenterPage'
import sentEmail from '@/components/admin/sentEmail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,

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
    }, {
      path:'/joinUsList',
      name:'joinUsList',
      component:joinUsList
    },
    {
      path:'/participantList',
      name:'participantList',
      component:participantList
    },
    {
      path:'/sentEmail',
      name:'sentEmail',
      component:sentEmail
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
          component:joinUsList
          },
        {
          path:'c',
          component:memberListPage
        },
        {
          path:'d',
          component:sentEmail
        }
          ]
    }



  ]
})
