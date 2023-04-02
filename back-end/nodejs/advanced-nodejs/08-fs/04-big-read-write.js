const fs = require('fs')
const path = require('path')
// 大文件读取和写入，边度边写

let buf=Buffer.alloc(10) // 10 bytes

// read：读操作即是将数据从磁盘文件中写入到buffer中
//fs.open('text.txt','r',(err,rfd)=>{
//    /**
//    * rfd 定位当前被打开的文件
//    * buf 当前缓冲区buffer
//    * offset 表示当前从 buf 的哪个位置开始执行写入
//    * length 表示当前次写入的长度
//    * position 表示从文件的哪个位置开始读取
//    * cb 回调函数
//    */
//    fs.read(rfd,buf,0,3,0,(err,readBytes,data)=>{
//        console.log(readBytes,data,data.toString()) // 3 <Buffer 6e 6f 64 00 00 00 00 00 00 00> nod
//    })
//})


// write：将缓冲区的内容写入磁盘文件中
buf=Buffer.from('1234567890')
fs.open('text3.txt','w',(err,wfd)=>{
    /**
     * wfd 定位当前被打开的文件
     * buf 当前缓冲区buffer
     * offset 表示当前从 buf 的哪个位置开始执行读取
     * length 表示当前次写入的长度
     * position 表示从文件的哪个位置开始写入
     * cb 回调函数
     */
    fs.write(wfd,buf,0,8,0,(err,writtenBytes,buffer)=>{
        // console.log(wfd,buf,'\n写入字节数：'+writtenBytes,buffer)
        fs.close(wfd)
    })
})