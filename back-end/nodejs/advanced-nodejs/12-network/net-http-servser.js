// 基于Net模块的Http服务
const net = require('net')

let httpServer = net.createServer()
httpServer.listen(1234, () => {
    console.log('NetHttpServer 已经启动了......')
})

httpServer.on('connection', socket => {
    socket.on('data', data => {
        console.log(data.toString())
    })
    socket.end('Can I do what for you')
})