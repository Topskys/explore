/**
 * 文件可读流创建和消费
 */
const fs = require('fs')

let rs = fs.createReadStream('text1.txt', {
    flags: 'r', // 可读模式
    encoding: null, // 编码值，默认时返回buffer二进制的值。
    fd: null, // 文件标识符，3~，因为0~2已经被标准输入、输出和错误占用。
    mode: 438, // 权限位，默认'rw'
    autoClose: true, // 自动关闭文件
    start: 0, // 从哪开始读
    // end: 3, // 读到哪里结束； 0-3 表示读取4个字节。
    // highWaterMark: 2, // 水位线，表示每次要读去多少个字节；需要分批读两次，因为每次只能读取2个字节。
    highWaterMark: 4,
})

/* 消费数据 1 流动模式 */
//rs.on('data', chunk => {
//    console.log(chunk, chunk.toString())
//    rs.pause() // 暂停
//    setTimeout(() => {
//        rs.resume() // 再度
//    }, 1000)
//})

/* 消费数据 2 */
//rs.on('readable', () => {
//    // let data=rs.read()
//    // console.log(data) // 这个不能使用data.toString()，因为最后data会等于null
//    while ((data = rs.read(1)) !== null) { // rs.read(n)，n：从缓存区读几个字节
//        console.log(data.toString(),'\n缓存区所有数据：', rs._readableState.length )
//    }
//})


//```js
//// 当start: 0, highWaterMark: 4 ; read(1)；时
//// 解释，buffer每次读取4（highWaterMark）个字节写入buffer缓存区，而消费对象每次读取1个字节，
//// 当消费对象消费完缓存区的数据时，缓存区会触发生产数据的_read()调用相应的push，
//// 从底层数据再获取4个字节的数据到缓存区，供消费对象消费，如此反复，直到底层数据为null。
//data                       Buffer 缓存区                   消费数据
//_0_                          __0__ --------- read(1)/1 -----> 0
//_1_                            1
//_2_ ---- highWaterMark/1 ----> 2
//_3_                            3
//4
//5
//6
//7
//8
//9
//```


/**
 * 文件可读流事件与应用
 */
rs.on('open',fd=>console.log(fd+'文件打开了\n'))

let bufArr=[]
rs.on('data',chunk=>{
    // console.log(chunk+'\n')
    bufArr.push(chunk) // chunk is buffer
})
rs.on('end',()=>{
    console.log('data：'+Buffer.concat(bufArr).toString())
    console.log('end\n')
})
rs.on('close',()=>console.log('文件关闭了\n'))
rs.on('error',(err)=>console.log(err+'--error\n'))