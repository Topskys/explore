/**
 * 背压机制
 * 数据读写可能存在生产者的速度元大于消费者的速度，会出现产能过剩，而Readable维护着一个队列，在它不能消费这些数据，
 * 就会尝试把当前不能消费的数据缓存到队列里，但是当缓存队列的达到上限时，可能出现内存溢出、GC频繁调用、其他进程变慢。
 * 所谓背压机制，就是解决以上问题，让生产者与消费者之间的数据平滑流动。
 */
const fs = require('fs')

let rs = fs.createReadStream('text1.txt', { // 拉钩教育 12字节，每个中文字符占4个字节（utf-8）
    highWaterMark: 4, // 产出 4字节 ； 默认 64 
})

let ws = fs.createWriteStream('text2.txt', {
    highWaterMark: 1, // 消费 1个字节 ； 默认 16 
})


let flag = true
rs.on('data', chunk => {  // 流动模式（一直放水），可暂停或继续
    flag = ws.write(chunk, () => { // 产出4 >= 消费1 ? return false : return true
        console.log('写完了')
    })
    if (!flag) {
        rs.pause() // close
    }
})
//ws.on('drain', () => rs.resume()) // 消费完再继续启动流动 open 1
rs.pipe(ws) // 通过管道把可读流再次传给可写流 open 2
//
//pool ---4--- pause / resume ---------- Buffer -----------1-> 消费
//                ^       ^                                |
//                |--------------4>=1?false:true---------- <
//                        |             |
//                        |-<-- drain --<
