import axios from 'axios'
import { Toast } from 'vant' // 加载中...功能

// 1、axios请求 第一种封装

// function httpForList() {
//     return axios({ // 默认 get请求
//         url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4087179',
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1642602055130764574294017","bc":"440300"}',
//             'X-Host': 'mall.film-ticket.film.list'
//         },
//     })
// }

// function httpListLoading(params) {
//     return axios({
//         url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${params}&pageSize=10&type=1&k=4087179`,
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1642602055130764574294017","bc":"440300"}',
//             'X-Host': 'mall.film-ticket.film.list'
//         },
//     })
// }

// function httpForDetail(params) {
//     return axios({
//         url: `https://m.maizuo.com/gateway?filmId=${params}&k=1175628`,
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1642602055130764574294017","bc":"440300"}',
//             'X-Host': 'mall.film-ticket.film.info',
//         },
//     })
// }

// function httpForCinemas() {
//     return axios({
//         url: "https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=5121167",
//         headers: {
//             'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "1642602055130764574294017", "bc": "440300" }',
//             'X-Host': 'mall.film-ticket.cinema.list',
//         },
//     })
// }

// export default {
//     httpForList,
//     httpForDetail,
//     httpForCinemas,
//     httpListLoading,
// }


// 2、axios请求 第二种封装

const http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 10000,
    headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1642602055130764574294017","bc":"440300"}',
    },
})

// 添加请求拦截器
http.interceptors.request.use(function(config) {
    Toast.loading({
        message: '加载中...',
        forbidClick: true, //禁止点击关闭
        duration: 0,
    })
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// // 添加响应拦截器
http.interceptors.response.use(function(response) {
    Toast.clear() // 清除加载中...
    return {
        ...response, // 展开response
    }
}, function(error) {
    Toast.clear()
    return Promise.reject(error);
})

export default http


//在发请求之前拦截----show Loading...
//在发请求之后拦截----hide Loading
// Toast.loading({
//     message: '加载中...',
//     forbidClick: true, //进制点击关闭
//     //duration:0,
// });
//Toast.clear()