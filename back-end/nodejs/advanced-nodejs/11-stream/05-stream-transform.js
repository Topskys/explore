const {Transform} = require('stream')

class MyTransform extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, en, cb) {
        this.push(chunk.toString().toUpperCase())
        cb(null)
    }
}

const mtm = new MyTransform()
mtm.write('a') // 写
mtm.on('data',chunk=>console.log(chunk.toString())) // 读

