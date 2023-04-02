const {Duplex} = require('stream')


class MyDuplex extends Duplex {
    constructor(source) {
        super();
        this.source = source
    }

    _read() {
        let data = this.source.shift() || null
        this.push(data)
    }

    _write(chunk, en, next) {
        process.stdout.write(chunk) // 标准输出
        process.nextTick(next)
    }
}

let source = ['1669534870170', 'a', 'b', 'c']

const mdx = new MyDuplex(source)
//mdx.on('data',chunk=>console.log(chunk.toString())) // 读

mdx.write('拉勾教育', () => console.log('end')) // 写