import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from "../views/PageOneView";
import PageTwo from "../views/PageTwoView";
import PageThree from "../views/PageThreeView";
import PageFour from "../views/PageFourView";
import App from "../App"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "导航1",
    component: App,
    children: [
  {
    path: '/pageOne',
    name: '页面1',
    component: PageOne
  },
  {
    path: '/pageTwo',
    name: '页面2',
    component: PageTwo
  },
    ]},
  {
    path:'navigation',
    name:"导航2",
    component: app,
    children: [
      {
        path: '/pageThree',
        name: '页面3',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '页面4',
        component: PageFour
      }
    ]
  },
  {
    path:'navigation',
    name:"导航3",
    component: app,
    children: [
      {
        path: '/pageThree',
        name: '页面4',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '页面5',
        component: PageFour
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
