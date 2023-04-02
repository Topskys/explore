/**
 * 需求：”控制写入速度“写入指定的文件
 * 01 一次性写入，大文件的写入对内存不友好，因为它会有短时间的溢出或者说撑满的情况。
 * 02 分批写入，限流
 */
const fs = require('fs')

/* 01 一次性写入 */
//let ws=fs.createWriteStream('text1.txt')
//ws.write("01 一次性写入，大文件的写入对内存不友好，因为它会有短时间的溢出或者说撑满的情况。")

/* 02 分批写入 */
let ws=fs.createWriteStream('text1.txt',{highWaterMark:3,})
let source="02 分批写入，控制写入数据".split('')
let num=0
let flag=true
function executeWrite(){
    flag=true
    while (num!==source.length && flag){ // 控制写入量
        // console.log(source[num])
        flag=ws.write(source[num])
        num++
    }
}
executeWrite()
ws.on('drain',()=>{
    console.log('flag is false，drain 执行，表示可以再写入了')
    executeWrite()
})