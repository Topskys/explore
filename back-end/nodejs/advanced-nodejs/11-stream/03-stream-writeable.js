const {Writable} = require('stream')

class MyWritable extends Writable{
    constructor() {
        super();
    }
    _write(chunk,en,done){
        process.stdout.write(chunk.toString())
        process.nextTick(done)
    }
}

let mwa=new MyWritable()

mwa.write('拉钩教育','utf-8',()=>console.log('end'))