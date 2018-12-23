import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Member from './views/Member.vue'
import SearchResults from './views/SearchResults.vue'
import SpecialPrice from './views/SpecialPrice.vue'
import Search from './views/Search.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/searchresults',
      name: 'aboSearchresultsut',
      component: SearchResults,
      
    },
    {
      path: '/specialprice',
      name: 'specialprice',
      component: SpecialPrice
    },{
      path:'/search',
      name:'search',
      component: Search
    }
  ]
})
