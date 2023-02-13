const express = require('express')

const app = express()


//write your code here...

// body-parser是express常用的一个中间件，用来解析表单的post请求数据
// body-parser用来处理不同类型的请求体、不同的编码、不同的压缩类型等

//  //配置
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// 配置解析application/json格式数据
app.use(express.json())

// 配置解析 application / x - www - form - urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({
	extended: false
}))

// 导入 cors 跨域中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())

// 导入并注home路由模块
const homeRouter = require('./router/home')
app.use('/api', homeRouter)
// app.use( homeRouter)


//启动 Api_server
app.listen(8889, () => {
	console.log('api_server running at http://localhost:8889')
})
