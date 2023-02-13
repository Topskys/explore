import App from './App'
import {
	http
} from '@/util/api.js'

Vue.prototype.$http = http

//全局时间过滤器
Vue.filter('formatDate', (date) => {
	const dt = new Date(date)
	const y = dt.getFullYear()
	const m = (dt.getMonth() + 1).toString().padStart(2, 0)
	const d = dt.getDate().toString().padStart(2, 0)
	return `${y}-${m}-${d}`
})


// #ifndef VUE3
import Vue from 'vue'
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
