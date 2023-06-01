// 解决跨越请求

// cnpm i --save-dev http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/ajax', {   // 匹配所有带'/ajax'的接口地址进行代理转发
            target: 'https://i.maoyan.com',  // 代理地址
            changeOrigin: true, 
            pathRewrite: {
                '^/ajax': ''  // 将请求地址中的'/ajax'重写为空再请求接口（也就是用target替换/ajax）
            }
        })
    )
}