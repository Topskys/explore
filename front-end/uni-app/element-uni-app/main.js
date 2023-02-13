import Vue from 'vue'
import App from './App'

import {
	http
} from '@/utils/api.js'

import qs from 'qs'

// 1. 导入Vant组件
// import Vant from 'vant'
import {
	setStorage,
	getStorage,
	removeStorage
} from '@/utils/index'




// 挂载到原型上
// Vue.prototype.$api = api
// Vue.prototype.$dateTime = dateTime
Vue.prototype.$http = http
Vue.prototype.$setStorage = setStorage
Vue.prototype.$getStorage = getStorage
Vue.prototype.$removeStorage = removeStorage
Vue.prototype.$qs = qs

// 注册
// Vue.use(Vant)



// #ifndef VUE3

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
