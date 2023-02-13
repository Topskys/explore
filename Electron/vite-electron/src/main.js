/*
 * @Author: Topskys
 * @Date: 2022-12-01 17:18:13
 * @LastEditTime: 2022-12-03 16:54:32
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 引入文件
import 'normalize.css';
import '@/assets/common.css';
// 插件
import { createPinia } from 'pinia';
import router from './router';



createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')

