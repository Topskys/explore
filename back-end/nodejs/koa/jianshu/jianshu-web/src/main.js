/*
 * @Author: Topskys
 * @Date: 2022-12-25 14:59:16
 * @LastEditTime: 2022-12-25 15:21:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './http'




Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
