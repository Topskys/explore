const fs =require('fs')

let rs=fs.createReadStream('./text1.txt') // 文件不存在会报错
let ws=fs.createWriteStream('./text2.txt') // 文件不存在将自动创建

rs.pipe(ws) // 从管道中获取text1.txt的数据写入text2.txt
