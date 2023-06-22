import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import NProgress from 'nprogress'; // npm i --save-dev @types/nprogress
import 'nprogress/nprogress.css';
import { message } from "antd";

// 不显示提示转圈
NProgress.settings.showSpinner = false

const request = axios.create({
    baseURL: "http://dida100.com:8888",
    timeout: 5000
})

request.interceptors.request.use(config => {
    NProgress.start();
    let token = sessionStorage.getItem('token');
    token && (config.headers["Authorization"] = "Bearer " + token);
    return config
})

request.interceptors.response.use(result => {
    NProgress.done()
    if (result.status !== 200) {
        if (result.status === 401) {
            message.info("暂无权限")
        } else if (result.status === 500 || result.status === 505) {
            message.info("服务器错误")
        } else if (result.status === 404) {
            message.info("请求地址错误")
        } else {
            message.info("请求错误")
        }
    }
    return result
}, error => {
    NProgress.done();
    message.info("请求错误")
    return error
})

export default request;