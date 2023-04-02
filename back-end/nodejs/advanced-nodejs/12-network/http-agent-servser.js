// 代理客户端
const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url)

    // post
    let arr = []
    req.on('data', (data) => {
        arr.push(data)
    })
    req.on('end', () => {
        let req_data = Buffer.concat(arr).toString()
        res.setHeader('Content-type', 'text/html;chartset=utf-8') // 防止浏览器输出乱码
        if (req.headers['Content-type'] == 'application/json') {
            let jData = JSON.parse(req_data)
            jData.add = '你好-'
            res.end(JSON.stringify(jData))
        } else if (req.headers['Content-type'] == 'application/x-www-form-urlencoded') {
            let req_data = querystring.parse(obj) // 解析?a=1&b=2表单数据
            res.end(JSON.stringify(req_data))
        }
    })
})

server.listen(1234, () => {
    console.log('HttpServer 已经启动了......')
})