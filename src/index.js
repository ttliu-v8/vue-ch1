import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import http from './http/index'
import store from './store'
Vue.prototype.$http = http
new Vue({
    router,
    store:store,
    render:h => h(App)
}).$mount('#app')