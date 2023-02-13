// 使用localStorage做本地存储
// export function setStorage(key, value) {
	// sessionStorage.setItem(key, JSON.stringify(value))
// }
// export function getStorage(key) {
	// return JSON.parse(sessionStorage.getItem(key))
// }

// export function removeStorage(key) {
	// sessionStorage.removeItem(key)
// }

import qs from 'qs'

// sessionStorage存储
var dataType = null

// 存储sessionStorage
export function setStorage(key, value) {
	if (typeof value === 'json') {
		dataType = 'json'
		sessionStorage.setItem(key, JSON.stringify(value))
	} else {
		sessionStorage.setItem(key, qs.stringify(value))
	}
}

// 获取sessionStorage
export function getStorage(key) {
	return dataType === 'json' ? JSON.parse(sessionStorage.getItem(key)) : qs.parse(sessionStorage.getItem(key))
}

// 删除sessionStorage
export function removeStorage(key) {
	sessionStorage.removeItem(key)
}
