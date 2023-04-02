const fs = require('fs')
const path = require('path')


/**
 * 同步创建目录
 * 01 接收类似参数 a\\b\\c
 * 02 利用 / 分割路径 ['a','b','c']
 * 03 遍历分割后路径数组，用 / 拼接
 * 04 判断拼接之后路径是否具有可操作权限，如果有则证明目录存在，否则需要创建目录。
 */
function createDirSync(dirPath) {
    let items = dirPath.split(path.sep) // [ 'a', 'b', 'c' ] \
    for (let i = 1; i <= items.length; i++) {
        let dir = items.slice(0, i).join(path.sep)
        try {
            fs.accessSync(dir)
        } catch (err) {
            fs.mkdirSync(dir)
        }
    }
}

createDirSync('a\\b\\c')