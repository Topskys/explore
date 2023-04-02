// 创建TCP通信实例（Stream）
const net = require('net')
const DataPackage = require('./data-package.js')

const dp = new DataPackage()
let overageBuffer = null

const server = net.createServer()
const PORT = 1234
const HOST = 'localhost'

server.listen(PORT, HOST)

server.on('listening', () => {
    console.log(`Net创建的TCP服务端已经开启：${HOST}:${PORT}`)
})

// 接收消息，并回复
server.on('connection', socket => {   // socket为双工流
    socket.on('data', chunk => {
        //        const msg = chunk.toString()
        //        console.log(msg)
        //        // 回复(Buffer强制转二进制)
        //        socket.write(Buffer.from('Hi ' + msg))

        if (overageBuffer) {
            chunk = Buffer.concat([overageBuffer, chunk])
        }
        let packageLen = 0
        while (packageLen = dp.getPackageLen(chunk)) {
            const packageCon = chunk.slice(0, packageLen)
            chunk = chunk.slice(packageLen)
            const res = dp.decode(packageCon)
            socket.write(dp.encode(res.body, res.serialNum))
        }
        overageBuffer = chunk
    })
})

server.on('close', () => console.log('Server close'))

server.on('error', (err) => {
    if (err.code == 'EADDRINUSE') {
        console.log(`${PORT}已经被占用`)
    } else {
        console.log(err)
    }
})