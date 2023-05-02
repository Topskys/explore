const express = require('express')
const joi = require('joi') //@hapi/joi//已过时


const app = express()


//write your code here...

// 导入 cors 中间件,解决跨域问题
const cors = require('cors')
app.use(cors()) // 将 cors 注册为全局中间件

// 配置解析 application / x - www - form - urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))



// 优化：响应数据的中间件，一定要在路由之前，封装res.cc函数代替res.send
app.use(function(req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function(err, status = 1) {
        res.send({
            status, // 状态
            message: err instanceof Error ? err.message : err, // 状态描述，判断 err 是 错误对象 还是 字符串
        })
    }
    next()
})



// 导入配置文件   // 一定要在路由之前配置解析 Token 的中间件
const config = require('./config')
    // 解析 token 的中间件
const expressJWT = require('express-jwt')
    // 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))




// /my开头表示有权限的接口，需要求情头token


// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 导入并使用用户信息路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

//导入并使用文章分类路由模块
const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)

//导入并使用文章路由模块
const articleRouter = require('./router/article')
app.use('/my/article', articleRouter)





//定义错误级别的中间件
app.use((err, req, res, next) => {
    //验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
        // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    console.log(err.name)
    res.cc(err) //未知的错误
})

app.listen(3007, function() {
    console.log('api_server running at http://127.0.0.1:3007')
})