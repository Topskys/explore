const express = require('express')

const app = express()


//write your code here...


// 配置解析 application / x - www - form - urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({
	extended: false
}))

// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())

// 导入并注home路由模块
const homeRouter = require('./router/home')
app.use('/api', homeRouter)


//启动 Api_server
app.listen(8888, () => {
	console.log('api_server running at http://127.0.0.1:8888')
})
