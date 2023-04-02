/*
 * @Author: Topskys
 * @Date: 2023-03-26 16:26:32
 * @LastEditTime: 2023-03-26 17:28:44
 * 文件可写流实现
 */

const fs = require('fs')
const EventsEmitter = require('events')
const Queue = require('./12-one-way-linked')

class MyWriteStream extends EventsEmitter {
    constructor(path, options = {}) {
        super();
        this.path = path
        this.flags = options.flags || 'w'
        this.mode = options.mode || 438 // 权限位，十进制
        this.autoClose = options.autoClose || true
        this.start = options.start || 0
        this.encoding = options.encoding || 'utf8'
        this.highWaterMark = options.highWaterMark || 16 * 1024 // 16KB
        this.writeOffset = this.start
        this.writing = false
        this.writeLen = 0
        this.needDrain = false
        this.cache = new Queue()
        this.open()
    }

    open() {
        fs.open(this.path, this.flags, (err, fd) => {
            if (err) this.emit('error', err)
            this.fd = fd
            this.emit('open', fd)
        })
    }

    write(chunk, encoding, cb) {
        chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
        this.writeLen += chunk.length
        let flag = this.writeLen < this.highWaterMark
        this.needDrain = !flag
        if (this.writing) {
            // 正在写入，需要排队，将数据加入缓存队列中
            this.cache.enter({ chunk, encoding, cb })
        } else {
            this.writing = true
            // 当前不是正在写入，那么就执行写入
            this._write(chunk, encoding, () => {
                cb()
                this._clearBuffer() // 清空队列
            })
        }
        return flag
    }

    _write(chunk, encoding, cb) {
        if (typeof this.fd != 'number') {
            return this.once('open', () => {
                this._write(chunk, encoding, cb)
            })
        }
        fs.write(this.fd, chunk, this.start, chunk.length, this.writeOffset, (err, writtenBytes) => {
            if(err) throw Error(err)
            this.writeOffset += writtenBytes
            this.writeLen -= writtenBytes
            cb && cb()
        })
    }

    _clearBuffer() {
        let data = this.cache.out()
        console.log(data)
        if (data) {
            this._write(data.element.chunk, data.element.encoding, () => {
                data.element.cb && data.element.cb()
                this._clearBuffer()
            })
        } else {
            if (this.needDrain) {
                this.needDrain = false
                this.emit('drain')
            }
        }
    }
}

const mws = new MyWriteStream('text1.txt', {
    highWaterMark: 1,
})

mws.on('open', fd => console.log(fd))
mws.write('1', 'utf8', () => console.log('ok1'))
 mws.write('2lgjy', 'utf8', () => console.log('ok2'))
 mws.write('3拉钩教育', 'utf8', () => console.log('ok3'))

mws.on('drain', () => console.log('drain'))

mws.on('error', err => console.error(err))
