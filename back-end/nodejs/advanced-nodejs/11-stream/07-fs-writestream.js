/**
 * 文件可写流
 */
const fs = require('fs')

const ws = fs.createWriteStream('text1.txt', {
    flags: 'w',
    mode: 438,
    fd: null,
    encoding: "utf-8",
    start: 0,
    highWaterMark: 3, // 可能有汉字，故3
})

/*
 * 消耗数据
 * fs rs---> 参数：string、buffer
 */
let buf = Buffer.from('abc')

//ws.write(`${new Date().toLocaleString()}拉勾教育`,()=>{
//    console.log('数据写完了1')
//})
//
//ws.write(`${Date.now()}`,()=>{
//    console.log('数据写完了2')
//})
//
//ws.write(buf,()=>{
//    console.log('数据写完了2')
//})

ws.on('open', fd => console.log('open：', fd))
ws.write(buf)
ws.end() // 意味数据写入完成，如传入参数，则会在最后再次写入数据（end('拉勾教育评审官方个的搞活动三的都会')）
ws.on('close', () => console.log('close'))
ws.on('error', (err) => console.log('err：', err))
