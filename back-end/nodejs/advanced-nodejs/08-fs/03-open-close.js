const fs = require('fs')
const path = require('path')
// 打开文件和关闭文件

// open
fs.open(path.resolve('text.txt'), 'r', (err, fd) => {
    console.log(fd) // 3
    // close
    fs.close(fd,err=>{
        !err && console.log('close')
    })
})