import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store'
new Vue({
    router,
    store:store,
    render:h => h(App)
}).$mount('#app')