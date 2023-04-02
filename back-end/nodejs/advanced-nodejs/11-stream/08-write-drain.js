/**
 * write 执行流程
 */

const fs = require('fs')


let ws=fs.createWriteStream('text1.txt',{
    highWaterMark:3,
})

//let flag=ws.write(`1-${Date.now()}`)
//console.log(flag)
//
//flag=ws.write(`2-${Date.now()}`)
//console.log(flag)
//
//flag=ws.write(`3-${Date.now()}`)
//console.log(flag)

// 01 第一次调用write方法是将数据直接写入文件中。
// 02 第二次调用write方法就是将数据写入至缓存中。
// 03 生产速度 和 消费速度 不等，一般生产速度比消费速度快跟多。
// 04 如果 flag 为 false 并不能表示前数据不能被执行写入，说明了数据生产与消费的状态，我们需要告知该数据的生产者，说明当前消费速度跟不上生产速度了，这时，我们会将可读流的模块修改为暂停模式。
// 05 生产数据暂停，消费者会慢慢地消耗它内部缓存中的数据，直到可以再次被执行写入操作。
// 06 当缓冲区可以继续写入数据时如何让生产者知晓？drain事件。
// ```
// |-------|                           |--------------------------------|
// |       |                           |        可写流                   |
// |       |                           |  |--------------------------|  |
// |       |-------- second+ ------>   |  | 缓存区(上限16KB)           |  |
// |       |                           |  | 上限改为3(highWaterMark)   |  |
// | data  |                           |  |---------------------------|  |
// | 生产者 |——                         |---------------------------------|
// |       |  ——                                     |
// |       |    first                                |
// |       |         ——                              |
// |       |            ——                           v
// |       |                ——         |------------------------|
// |-------|                    ——>    |          文件           |
//                                     |------------------------|
// ```

let flag=ws.write(`1`)
console.log(flag)

flag=ws.write(`2`)
console.log(flag)

flag=ws.write(`3`)  // 当累计写入 >= highWaterMark(3) ? false : true
console.log(flag)

ws.on('drain',()=>console.log('当累计写入已经到达水位线(false)，会触发drain事件，第二次把data生产者的数据通过写入缓存区，再由缓存区写入文件中'))

