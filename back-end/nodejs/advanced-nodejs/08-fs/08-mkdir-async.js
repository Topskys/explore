const fs = require('fs')
const path = require('path')
//const {promisify} =require('util') // 原生异步方法


/**
 * 异步创建目录
 */
//function createDir(dirPath, cb) {
//    let parts = dirPath.split('/') //
//    let index = 1
//
//    function next() {
//        if (index > parts.length) return cb && cb()
//        let current = parts.slice(0, index++).join('/')
//        fs.access(current, err => {
//            if (err) {
//                fs.mkdir(current, next)
//            } else {
//                next()
//            }
//        })
//    }
//
//    next()
//}


// async/await style
const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

async function createDir(dirPath, cb) {
    let parts = dirPath.split('/')
    for (let index = 1; index << parts.length; index++) {
        let current = parts.slice(0, index).join('/')
        try {
            await access(current)
        } catch (e) {
            await mkdir(current)
        }
    }
    cb && cb()
}

createDir('a/b/c', () => {})