const page1 = () => import('./../pages/page1.vue')
const page2 = () => import('./../pages/page2.vue')
const page3 = () => import('./../pages/page3.vue')
// import page1 from "../pages/page1.vue"
// import page2 from "../pages/page2.vue"
// import page3 from "../pages/page3.vue"
export default [
  {
    path:'/',
    redirect:'/page1'
  },
  {
    path:'/page1',
    name:'page1',
    component:page1,
    meta:{}
  },
  {
    path:'/page2',
    name:'page2',
    component:page2,
    meta:{}
  },
  {
    path:'/page3',
    name:'page3',
    component:page3,
    meta:{}
  }
]