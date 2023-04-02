// 封包
class DataPacket {
    constructor() {
        this.packageHeaderLen = 4  // 头部位数
        this.serialNum = 0 // 序列号
        this.serialLen = 2 // 序列号位数
    }

    // 编码
    encode(data, serialNum) {
        const body = Buffer.from(data)
        // 01 按照指定的长度申请一片内存空间给header使用
        const headerBuf = Buffer.alloc(this.packageHeaderLen)
        // 02
        headerBuf.writeInt16BE(serialNum || this.serialNum)
        headerBuf.writeInt16BE(body.length, this.serialLen)

        if (serialNum == undefined) {
            this.serialNum++
        }

        return Buffer.concat([headerBuf, body]) // {[header],[body]}
    }

    // 解码
    decode(buffer) {
        const headerBuf = buffer.slice(0, this.packageHeaderLen)
        const bodyBuf = buffer.slice(this.packageHeaderLen)
        return {
            serialNum: headerBuf.readInt16BE(), // 16进制
            bodyLength: headerBuf.readInt16BE(this.serialLen), // 跳过编号所在位置
            body: bodyBuf.toString()
        }
    }

    // 获取当前数据包的长度，可验证包的完整性
    getPackageLen(buffer) {
        if (buffer.length < this.packageHeaderLen) {
            return 0
        } else {
            return this.packageHeaderLen + buffer.readInt16BE(this.serialLen)
        }
    }
}

module.exports = DataPacket


// 拆包
//const DataPackage = require('./data-package')
//
//let dp = new DataPackage()
//let str = '拉勾教育'// new Date().toLocaleString()
//
////console.log(Buffer.from(str)) // <Buffer e6 8b 89 e5 8b be e6 95 99 e8 82 b2>
////console.log(dp.encode(str, 1)) // <Buffer 00 01 00 0c e6 8b 89 e5 8b be e6 95 99 e8 82 b2>
//
//let encodeBuf=dp.encode(str,1)
//let len=dp.getPackageLen(encodeBuf)
//console.log(len,dp.decode(encodeBuf)) // 16 { serialNum: 1, bodyLength: 12, body: '拉勾教育' }