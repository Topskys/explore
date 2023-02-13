/*
 * @Author: Topskys
 * @Date: 2022-12-25 15:07:57
 * @LastEditTime: 2022-12-30 15:23:21
 * axios二次封装
 */
import axios from 'axios';




//创建axios实例对象
let instance = axios.create({
    baseURL: 'http://localhost:3000', //服务器地址
    timeout: 5000 //默认超时时长
})

//请求拦截器
instance.interceptors.request.use(config => {
    //此处编写请求拦截的代码，一般用于弹出加载窗口
    config.headers['Authorization']= "Bearer " + localStorage.getItem('token')||''
    return config
}, err => {
    console.error('请求失败', err)
})

//响应拦截器
instance.interceptors.response.use(res => {
    //此处对响应数据做处理
    return res //该返回对象会传到请求方法的响应对象中
}, err => {
    // 响应错误处理
    console.log('响应失败！', err)
    // return Promise.reject(err);
})




/**
 * @description: 封装http请求的方法，封装axios请求方法，参数为配置对象
 * @param {*} option = {method,url,params} method为请求方法，url为请求接口，params为请求参数
 * 配置对象，属性包括：
 * method 请求方法
 * path 请求接口地址
 * params/data 请求参数
 * @return {*}
 */
async function http(option = {}) {
    let result = null
    if (option.method === 'get' || option.method === 'delete') {
        //处理get、delete请求
        await instance[option.method](
            option.url,
            { params: option.params },
            option.config
        ).then(res => {
            result = res.data
        }).catch(err => {
            result = err
        })
    } else if (option.method === 'post' || option.method === 'put') {
        //处理post、put请求
        await instance[option.method](
            option.url,
            option.params,
            option.config
        ).then(res => {
            result = res.data
        }).catch(err => {
            result = err
        })
    }

    return result
}




export default http

