const fs = require('fs')
const path = require('path')
// 这里适合小文件的读取和写入，大文件读写需要使用流

// readFile，路径文件不存在，会报错
//fs.readFile(path.resolve('text.txt'),'utf-8',(err,data)=>{
//    console.error(err)
//    console.log(data)
//})


// writeFile
//fs.writeFile('text1.txt',
//    `${new Date().toLocaleString()}：writeFile写入数据，默认会覆盖之前的内容，路径文件不存在，将自动创建。`, {
//        mode: 438, // 权限位（十进制，可选）
//        flag: 'r+', // 可读可写，默认‘w+’
//        encoding: "utf-8",
//    }, err => {
//        if (!err) {
//            fs.readFile(path.resolve('text1.txt'), 'utf-8', (err, data) => {
//                err ? console.error(err) : console.log(data)
//            })
//        }
//    })


// appendFile
//fs.appendFile('text1.txt','文件内容追加',{},err=>{
//    !err && console.log('appenFile OK')
//})


// copyFile
//fs.copyFile('text1.txt','text2.txt',(err)=>!err && console.log('copyFile OK，将text1.txt的数据复制到text2.txt。'))


// watchFile
//fs.watchFile('text1.txt', {
//    interval: 20, // 每二十秒监听一次
//}, (curr, prev) => {
//    if (curr.mtime !== prev.mtime) {
//        console.log('watchFile：txet1.txt文件被修改了')
//        fs.unwatchFile('text1.txt')
//    }
//})