const net = require('net')
const DataPackage = require('./data-package.js')

const dp = new DataPackage()
let overageBuffer = null


const client = net.createConnection({
    port: 1234,
    host: '127.0.0.1'
})


let newsArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] // 粘包方法 1 使用

// 方法2 使用
client.write(dp.encode('1234567890--'))
client.write(dp.encode('---拉勾教育'))
client.write(dp.encode('---Topskys'))


client.on('connect', () => {
    // client.write('Topskys')  // 发送消息
    // newsArr.forEach(item=>client.write(item)) // TCP粘包，Hi Topskys \n Hi ABCDEFG
    // 解决TCP粘包 方法 1 分批延时
    //    for (let i = 0; i < newsArr.length; i++) {
    //        (function (val, index) {
    //            setTimeout(() => {
    //                client.write(val)
    //            }, 1000 + (index + 1))
    //        })(newsArr[i], i)
    //    }
    // 解决TCP粘包后，好多了
    // Hi Topskys
    // Hi A
    // Hi BC
    // Hi D
    // Hi EHi F
    // Hi G
})
client.on('data', (chunk) => {
//    console.log(chunk.toString()) // 接收消息
    // 方法2 封包与拆包
    if (overageBuffer) {
        chunk = Buffer.concat([overageBuffer, chunk])
    }
    let packageLen = 0
    while (packageLen = dp.getPackageLen(chunk)) {
        const packageCon = chunk.slice(0, packageLen)
        chunk = chunk.slice(packageLen)
        const result = dp.decode(packageCon)
        console.log(result)
    }
    overageBuffer = chunk

    // { serialNum: 0, bodyLength: 12, body: '1234567890--' }
    // { serialNum: 1, bodyLength: 15, body: '---拉勾教育' }
    // { serialNum: 2, bodyLength: 10, body: '---Topskys' }
})
client.on('error', (err) => {
    console.log(err)
})
client.on('close', () => {
    console.log('客户端已断开连接')
})
