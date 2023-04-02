const http = require('http')

function sleepTime(time) {
    const sleep = Date.now() + time * 1000
    while (Date.now() < sleep) {}
    return;
}

sleepTime(8) // 占用CPU，后续逻辑必须等待，8秒后才启动server

const server = http.createServer((req, res) => {
    res.end('server starting......')
})


server.listen(8000, () => console.log(`${new Date().toLocaleString()}：nodejs http 已启动了`))