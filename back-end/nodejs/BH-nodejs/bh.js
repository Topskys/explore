const fs = require('fs')
const path = require('path')

////fs 模块
// fs.readFile('BH-nodejs/file/rf.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('文件读取失败！' + err.message)
//     }
//     // console.log('文件读取成功！' + dataStr)
//     const oldArr = dataStr.split(' ') //空格分割
//     const newArr = []
//     oldArr.forEach(obj => { //对每一项数据进行字符串的替换
//         newArr.push(obj.replace('=', '：'))
//     })
//     newStr = newArr.join('\r\n') //合并
//     console.log(newStr)
//         // __dirname(当前文件所处目录),路径动态拼接，解决路径拼接问题
//     fs.writeFile(__dirname + '/wf-ok.txt', newStr, function(err) {
//         if (err) {
//             return console.log('文件写入失败！' + err.message)
//         }
//         console.log('文件写入成功！')
//     })
// })

// //path 模块
// //path.join()//将多个路径片段拼接成一个完成整路径字符串
// const pathStr = path.join(__dirname, '/a', '/b/c', '../../', './d', 'e')
// console.log(pathStr) // 输出：__dirname\a\d\e
// //使用path.basename) 方法， 可以从一个文件路径中， 获取到文件的名称.ext:
// const fpath = '/a/b/c/index.html' // 文件的存放路径
// var fullName = path.basename(fpath)
// console.log(fullName) //输出index.html
// var nameWithoutExt = path.basename(fpath, '.html')
// console.log(nameWithoutExt) //输出：index
// const fpath = '/a/b/c/index.html' //路径字符串
// const fext = path.extname(fpath)
// console.log(fext) //输出.html

// //将html分割成三个文件index、css、js
// //定义正则表达式，匹配style和script标签
// const regStyle = /<style>[\s\S]*<\/style>/
// const regScript = /<script>[\s\S]*<\/script>/

// fs.readFile(path.join(__dirname, '../BH-nodejs/file/index.html'), 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('读取HTML失败' + err.message)
//     }
//     console.log('读取HTML成功')
//     resolveCSS(dataStr)
//     resolveJS(dataStr)
//     resolveHTML(dataStr)
// })

// function resolveCSS(htmlStr) {
//     const r1 = regStyle.exec(htmlStr)
//     const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
//         // console.log('newCSS OK\n', newCSS)
//     fs.writeFile(path.join(__dirname, './file/hss/index.css'), newCSS, function(err) {
//         if (err) {
//             return console.log('写入CSS失败' + err.message)
//         }
//         console.log('写入CSS成功')
//     })
// }

// function resolveJS(htmlStr) {
//     const r2 = regScript.exec(htmlStr)
//     const newJS = r2[0].replace('<script>', '').replace('</script>', '')
//         // console.log('newCSS OK\n', newJS)
//     fs.writeFile(path.join(__dirname, './file/hss/index.js'), newJS, function(err) {
//         if (err) {
//             return console.log('写入JS失败' + err.message)
//         }
//         console.log('写入JS成功')
//     })
// }

// function resolveHTML(htmlStr) {
//     const newHTML = htmlStr.replace(regStyle, '<link rel = "stylesheet" href = "./file/hss/index.css"/> ').replace(regScript, ' <script src = "./file/hss/index.js" > </script>')
//     fs.writeFile(path.join(__dirname, './file/hss/index.html'), newHTML, function(err) {
//         if (err) {
//             return console.log('写入HTML失败' + err.message)
//         }
//         console.log('写入HTML成功')
//     })
// }




////服务器
// const http = require('http') //导入http模块
// const server = http.createServer() //创建web服务器实例
// server.on('request', (req, res) => { //为服务器实例绑定 request 事件，监听客户端的请求
//     console.log('Someone visit our web server.')
//     const url = req.url //客户端请求的 URL 地址
//     const method = req.method //客户端请求的 method 类型
//         // let content = '<h1>404 Not found</h1>'
//         //const fpath = path.join(__dirname, url) //把请求的 URL 地址映射为具体的文件存放路径
//     let fpath = ''
//     if (url === '/') {
//         fpath = path.join(__dirname, '/file/hss/index.html')
//     } else {
//         fpath = path.join(__dirname, '/file/hss', url)
//     }

//     fs.readFile(fpath, 'utf-8', (err, dataStr) => { //根据“映射”过来的文件路径读取的文件内容
//         if (err) return res.end('<h1>404 Not found.</h1>')
//         res.end(dataStr)
//     })

//     // if (url === '/' || url === '/index.html') {
//     //     content = '<h1>首页</h1>'
//     // } else if (url === '/about.html') {
//     //     content = '<h1>关于页面</h1>'
//     // }
//     const str = `Your request url is ${url}, and request method is ${method}`
//     console.log(str)
//         //const chs = `您请求的 URL 是 ${url}，请求的method类型是${method}`
//     res.setHeader('Content-Type', 'text/html; charset=utf-8') //设置响应头，解决res响应中文乱码问题
//         //res.end(content) //向客户端发送指定的内容，并结束本次请求的处理过程
// })
// server.listen(8000, () => { //启动服务器/80/8080/X   //Ctrl+C 停止服务器
//     console.log('server running at http://127.0.0.1:8000') //端口号为80可省略，例如：8080不可省略
// })




// //向外共享模块
// const age = 18
// module.exports.username = 'Topsky'//挂载//向外暴露//共享
// module.exports.sayNode = () => {
//     console.log("Hi ,Node.js")
// }
// module.exports.age = age
// exports = { //module.exports = exports
//     nickname: '小红',
//     age: age,
//     sayHi() {
//         console.log('Hi!')
//     }
// }





//时间格式化
// const df = require('./file/dateFormat')
// const dt = new Date()
// const newDT = df.dateFormate(dt)
// console.log(newDT)


// //导入moment包
// const moment = require('moment') //npm i moment
//     //参考 moment官方API文档，调用对脑的方法。对时间进行格式化
//     //调用moment()方法,得到当前的时间
//     //针对当前的时间，调用format()方法，按期定的格式进行时间的格式化
// const dt = moment().format('YYY-MM-DD HH:mm:ss')
// console.log(dt) //输出2020-01-1217:23:48



//转义html字符
// const h = require('./file/itheima-tools')
// const str = '<h1 class="n">fgehjkkeh;</h1>'
// const r = h.htmlEscape(str)
// console.log(r)


////express服务器
// const express = require('express')
// const app = express()
//     // app.use(express.static('./file/hss'))//快速静态资源
// app.get('/user', (req, res) => { //监听get
//     console.log(req.query) //http://127.0.0.1:8888/user/?name='fghgqj'&age=20
//     res.send({ name: 'gh', age: "18", gender: 'man' })
// })
// app.post('/user/:id/:name', (req, res) => { //监听post
//     console.log(req.params) //http://127.0.0.1:8888/user/23//获得id:23///23/yy
//     res.send('success post')
// })
// app.listen(8888, () => {
//     console.log("express server running at http://127.0.0.1:8888")
// })


// const express = require('express')
// const app = express()
//     //中间件
// const mw = function(req, res, next) {
//     console.log('这是一个中间件1')
//         // const time = new Date.now() //获取req时间
//         // req.startTime = time //挂载，以便下面的中间方便访问time
//     next(); //跳转下一个中间件
// }
// app.use(mw) //注册全局生效的中间件
// app.get('/', (req, res) => { //
//     //throw new Error("服务器内部发生了错误！") //执行该行，下面的code将不会执行
//     console.log('next()调用了/这个路由')
//     res.send('Home-get') //req.startTime
// })
// app.post('/user', (req, res) => {
//     console.log('next()调用了/user这个路由')
//         //配置json解析中间件，以解析前端发来json请求体,or req.body ===undefined
//     res.send('user-post', req.body)
// })
// app.listen(8888, () => {
//     console.log('service running at http://127.0.0.1:8888')
// })



// //定义错误级别中间件，注册必须在所有路由之前，捕获整个项目异常错误，防止服务器的崩溃
// app.use((err, req, res, next) => {
//     console.log('Error:' + err.message)
//     res.send("Error: " + err.message)
// })




//API
// const express = require('express') //导入express模块
// const app = express() //创建express服务器实例
// app.use(express.urlencoded({ extended: false })) //post配置解析表单数据的中间件
// const apiRouter = require('./file/router/apiRouter') // 导入路由
// app.use('/api', apiRouter) //前缀+注册路由
// app.listen(8888, () => { //启动服务器
//     console.log('service running at http://127.0.0.1:8888')
// })

//结果  http://127.0.0.1:8888/api/get?name='topsky'&age=18
// {
//     "status": 0,
//     "msg": "GET请求成功!",
//     "data": {
//         "name": "'topsky'",
//         "age": "18"
//     }
// }

//结果 http: //127.0.0.1:8888/api/post    name=gjkklj&age=5



// const express = require('express') //导入express模块
// const app = express() //创建express服务器实例


// var session = require('express-session') //导入 session 中间件
//     //配置 session 中间件
// app.use(session({
//     secret: 'keyboard cat', //secret 属性的值可为任意字符串
//     resave: false, //
//     saveUninitialized: true,
// }))

// app.post('/api/login', (req, res) => {
//     //判断当前用户提交的登录信息是否正确
//     if (req.body.username !== 'admin' || req.body.password !== '123456') return res.send({
//         status: 1,
//         msg: '登陆失败！'
//     })
//     req.session.user = req.body //将用户信息存入session中
//     req.session.islogin = true //将用户的登录状态 存储到session中
//     res.send({ status: 0, msg: '登陆成功' })
// })

// //获取用户名称
// app.get('/api/username', (req, res) => {
//     //判断用户是否登录
//     if (!req.session.islogin) {
//         return res.send({ status: 1, msg: 'fail' })
//     }
//     res.send({ status: 0, msg: 'success', username: req.session.user.username })
// })

// //退出登录
// app.post('/api/logout', (req, res) => {
//     req.session.destroy()
//     res.send({ status: 0, msg: '退出登录成功', })
// })


// app.use(express.urlencoded({ extended: false })) //post配置解析表单数据的中间件

// //必须在cors之前配置 JSON 的接口
// // app.get('/api/json', (req, res) => {
// //     //定义JSON具体实现过程
// // })
// app.get("/api/jsonp", (req, res) => {
//     const funcName = req.query.callback //1．获取客户端发送过来的回调函数的名字
//     const data = { name: 'zs', age: 22 } //2．得到要通过JSONP形式发送给客户端的数据5
//     const scriptStr = `${funcName}(${JSON.stringify(data)})` //3．根据前两步得到的数据，拼接出一个函数调用的字符串
//     res.send(scriptStr) //4．把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
// })



// //必须在路由之前配置cors中间件，从而解决接口跨域问题
// const cors = require('cors')
// app.use(cors)

// const apiRouter = require('./file/router/apiRouter') // 导入路由
// app.use('/api', apiRouter) //前缀+注册路由

// app.listen(8888, () => { //启动服务器
//     console.log('service running at http://127.0.0.1:8888')
// })