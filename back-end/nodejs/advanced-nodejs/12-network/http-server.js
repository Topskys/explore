// 创建Http服务
const http = require('http')
const url = require('url')

let server = http.createServer((req, res) => {
    // 查看请求参数
    // let {pathname, query} = url.parse(req.url, true)
    // console.log(req.method, req.httpVersion, req.headers)

    // 获取请求数据，可读流
//    let arr = []
//    req.on('data', data => {
//        arr.push(data)
//    })
//    req.on('end', () => {
//        console.log(Buffer.concat(arr).toString())
//    })

    // 响应请求，可写流
//    res.write('Can I do what for you')
     res.end('response data')
//    res.statusCode=200
//    res.setHeader('Content-type','text/html;chartset=utf-8')


//    res.end()
})


server.listen(1234, () => {
    console.log('HttpServer 已经启动了......')
})
