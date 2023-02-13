import Vue from 'vue' // ES6 导入方式
import App from './App.vue' // 导入根组件
import router from './router'
import store from './store'
//import PC from './PC'

Vue.config.productionTip = false


// 实例化入口
new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app') // 挂载入public的index.html

// var obj = {
//     name: 'Topsky',
//     age: 22
// }
// console.log(obj)