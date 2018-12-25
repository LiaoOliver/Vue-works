import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './bus';
// FB SDK login
import './assets/application.js';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(ElementUI);

router.beforeEach((to, from, next)=>{
    if (to.meta.requiresAuth) {
      if (store.state.accessToken){
        next()
      }else{
        next({
          path: '/'
        });
      }
    } else {
      next();
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
