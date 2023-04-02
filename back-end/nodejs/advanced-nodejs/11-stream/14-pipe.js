const fs=require('fs')
const MyFileReadStream=require('./11-read-stream')

const rs=new MyFileReadStream('./text1.txt',{highWaterMark:4})

//const rs=fs.createReadStream('./text1.txt',{highWaterMark:4})
const ws=fs.createWriteStream('./text2.txt',{highWaterMark:1})

// 拷贝
rs.pipe(ws) // rs --pipe-- ws

