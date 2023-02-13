import qs from 'qs';

// 回话存储
export function setStorage(key, value) {
    typeof value === 'json'? sessionStorage.setItem(key, JSON.stringify(value)):sessionStorage.setItem(key, qs.stringify(value))
} 

export function getStorage(key) {
    return JSON.parse(sessionStorage.getItem(key)) || qs.stringify(sessionStorage.setItem(key))
}

export function removeStorage(key) {
    sessionStorage.removeItem(key)
}