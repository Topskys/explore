const http = require('http')

let options = {
    host: 'localhost',
    port: 1234,
    path: '/?name=Topskys',
    method: 'POST',
    headers: {
        // 'Content-type': 'application/json', // 告诉服务客户端发送的请求数据为json
        'Content-type':'application/x-www-form-urlencoded' // 表单数据
    }
}

// 发送请求
const req = http.request(options, (res) => {
    let arr = []
    req.on('data', (data) => {
        arr.push(data)
    })
    req.on('end', () => {
        let res_data = Buffer.concat(arr).toString()
        console.log(res_data)
    })
})
//req.end('Topskys-request')
req.end("{'name':'Topsky-request-json'}")
