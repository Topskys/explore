/*
 * @Author: Topskys
 * @Date: 2023-03-24 15:29:34
 * @LastEditTime: 2023-03-25 20:00:30
 */
//const b1 = Buffer.alloc(10) // 创建一个10types的buffer
//const b2 = Buffer.allocUnsafe(10) // 不安全的创建方法，生成的buffer可能会有数据
//console.log(
//    b1, // <Buffer 00 00 00 00 00 00 00 00 00 00> 空
//    b2, // <Buffer 08 00 00 00 01 00 00 00 00 00> 有数据 16进制
//)

// from
//const b3=Buffer.from('1','utf8') // data<string|array|buffer> encoding，默认utf8，生成数据是16进制
//const b4=Buffer.from('中')
//const b5=Buffer.from([1,2,3,4,5,6])
//const b6=Buffer.from([1,2,'中'],'utf8')
//const b7=Buffer.from([0xe4,0xb8,0xad]) // 可传任意进制
//const b8=Buffer.from(Buffer.alloc(3)) // buffer，拷贝之前的buffer
////b8[0]=1 // <Buffer 00 00 00> --> <Buffer 01 00 00>
//console.log(
//        b3, // <Buffer 31> 一个字节，不是阿斯克编码
//        b4, // <Buffer e4 b8 ad> 一个汉字占据三个字节
//        b4.toString('utf8'), // buffer --> 中
//        b5, // <Buffer 01 02 03 04 05 06>
//        b6, // <Buffer 01 02 00>
//        b7, // <Buffer e4 b8 ad>
//        b8, // <Buffer 00 00 00>
//        )

// fill，填充，如数据不满足buffer的长度，将repeat填充，反之，则填满buffer即可。
//let b9 = Buffer.alloc(6) // 6 字节
//b9.fill('123') // fill(data,startAt,endAt) // <Buffer 31 32 33 31 32 33> 123123
//b9.write('123',1,2) //write(data,startAt,length) <Buffer 00 31 32 33 00 00> 12
//b9=Buffer.from('Topsky') // <Buffer 54 6f 70 73 6b 79>
//let r9=b9.slice(2,4) // <Buffer 70 73>
//b9=Buffer.from('Topsky，生成表单广告')
//r9=b9.indexOf('ps',2) // findStr，position
//let b10=Buffer.from('asgbh')
//b10.copy(b9,3,3,5)
//console.log(
//    b9,
//    b9.toString(), // toString(encoding,startAt,endAt) // 注意汉字占三个字节，故后两个参数必须是3的倍数
//    r9,
//    b10,
//    b10.toString()
//)


// concat isBuffer
let b11 = Buffer.from('如何提升')
let b12 = Buffer.from('自身魅力自')
let r12 = Buffer.concat([b11, b12],) //[],18：限制新buffer的长度
//console.log(r12, r12.toString(), Buffer.isBuffer('123456'))


// buffer分割，生成的buffer是一个字节数组，与普通数组类似，可使用split()分割
ArrayBuffer.prototype.split = function (sep) {
    let len = Buffer.from(sep).lengthA
    let res = []
    let start = 0
    let offset = 0
    while (offset = this.indexOf(sep, start) !== -1) {
        res.push(this.slice(start, offset))
        start = offset + len
    }
    res.push(this.slice(start))
    return res
}
console.log(r12.toString().split('自')) // [ '如何提升', '身魅力', '' ]
