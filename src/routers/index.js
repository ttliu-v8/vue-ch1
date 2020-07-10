import Vue from 'vue'
import VueRouter from 'vue-router'
import demos from './routers.js'
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    ...demos
  ]
})

router.beforeEach((to,from,next)=>{
  next()
})
router.afterEach(to=>{

})
export default router