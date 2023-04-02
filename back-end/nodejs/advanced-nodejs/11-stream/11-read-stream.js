/**
 * 模拟文件可读流
 */

const fs = require('fs')
const EventEmitter = require('events');

class MyFileReadStream extends EventEmitter {
    constructor(path, options = {}) {
        super(); // 初始化父类
        this.path = path
        this.flags = options.flags || 'r'
        this.mode = options.mode || 438 // 权限位，十进制
        this.autoClose = options.autoClose || true
        this.start = options.start || 0
        this.end = options.end
        this.highWaterMark = options.highWaterMark || 64 * 1024 // 64KB
        this.readOffset = options.readOffset || 0
        this.open()
        this.on('newListener', type => {
            // console.log(type)
            if (type === 'data') {
                this.read()
            }
        })
    }

    open() {
        // 使用原生open方法来打开指定位置的文件
        fs.open(this.path, this.flags, this.mode, (err, fd) => {
            // cb 为异步回调，而read()是同步所以访问不到this.fd，必须等待open的cb先执行
            if (err) {
                this.emit('error', err) // 通知事件('event',data)
            } else {
                this.fd = fd
                this.emit('open', fd)
            }
        })
    }

    read() {
        if (typeof this.fd != 'number') {
            return this.once('open', this.read) // 让open()先执行再执行read()
        }

        let buf = Buffer.alloc(this.highWaterMark)
        let howMuchToRead = this.end ? Math.min(this.end - this.readOffset + 1, this.highWaterMark) : this.highWaterMark

        fs.read(this.fd, buf, 0, howMuchToRead, this.readOffset, (err, readBytes) => {
            if (readBytes) {
                this.readOffset += readBytes;
                this.emit('data', buf.slice(0, readBytes))
                this.read()
            } else { // 文件读完
                this.emit('end')
                this.close()
            }
        })
    }

    close() {
        fs.close(this.fd, () => {
            this.emit('close')
        })
    }

    pipe(ws) {
        this.on('data', (data) => {
            let flag = ws.write(data)
            if (!flag) {
                this.pause() // this.pause is not a function
            }
        })
        ws.on('drain', () => {
            this.resume()
        })
    }
}

//let rs = new MyFileReadStream('text1.txt', {
//    end: 7, // 读 tsrat~end
//    highWaterMark: 3, // 3/1
//})
//
//rs.on('open', (fd) => console.log('open', fd))
//rs.on('data', chunk => console.log(chunk))
//rs.on('close', () => console.log('close'))
//rs.on('end', () => console.log('end'))
//rs.on('error', (err) => console.log('error', err))


module.exports = MyFileReadStream