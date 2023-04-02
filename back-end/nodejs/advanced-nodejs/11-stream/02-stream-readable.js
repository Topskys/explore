const {Readable} = require('stream')
let source = ['lg', 'zce', 'syy'] // 模拟数

class MyReadable extends Readable {
    constructor(source) {
        super();
        this.source = source
    }

    _read() {
        let data = this.source.shift() || null
        this.push(data)
    }
}


let mra = new MyReadable(source)

// 消费数据
// readable
//mra.on('readable', () => { // readable 已继承 EventMatter
//    let data = null
//    while ((data = mra.read(2)) !== null) {
//        console.log(data.toString())
//    }
//})

// data
mra.on('data', (chunk) => {
    console.log(chunk.toString())
})