const fs = require('fs')
const path = require('path')

/**
 * 拷贝
 * 01 打开 a.txt 文件，利用 read 将数据保存到buffer暂存
 * 02 打开 b.txt 文件，利用 write 将buffer中的数据写入b.txt文件中
 * a --rw--> buffer --rw--> b
 */

let buf = Buffer.alloc(10)

// 01 不完全拷贝
//fs.open('text2.txt', 'r', (err, rfd) => {
//    fs.open('text3.txt', 'w', (err, wfd) => {
//        fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
//            fs.write(wfd, buf, 0, 10, 0, (err, writtenBytes, buffer) => {
//                !err && console.log('写入成功')
//                fs.close(wfd,(err)=>{})
//                fs.close(rfd)
//            })
//        })
//    })
//})


// 02 完全拷贝，递归rw
//fs.open('text2.txt', 'r', (err, rfd) => {
//    fs.open('text3.txt', 'a+', (err, wfd) => {
//        fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
//            fs.write(wfd, buf, 0, 10, 0, (err, writtenBytes, buffer) => {
//                fs.read(rfd, buf, 0, 5, 10, (err, readBytes, buffer) => {
//                    fs.write(wfd, buf, 0, 5, 10, (err, writtenBytes, buffer) => {
//                        !err && console.log('写入成功')
//                        fs.close(wfd,(err)=>{})
//                        fs.close(rfd)
//                    })
//                })
//            })
//        })
//    })
//})


// 02 完全拷贝，优化方法
const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('text2.txt', 'r', (err, rfd) => {
    fs.open('text3.txt', 'w', (err, wfd) => {
        function next() {
            fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes, buffer) => {
                if (!readBytes) { // 大文件的内容已读取完毕
                    fs.close(wfd, (err) => {})
                    fs.close(rfd,(err) => {})
                    !err && console.log('拷贝成功')
                    return
                }
                readOffset+=readBytes
                fs.write(wfd, buf, 0, readBytes, (err, writtenBytes, buffer) => next())
            })
        }
        next()
    })
})