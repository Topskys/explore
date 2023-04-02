//console.log(global)
//
//console.log(__filename)
//
//console.log(__dirname)

//console.log(this,this===global) // nodejs中默认this是空对象{}，和global不一样 false

(function(){
    console.log(this===global) // true
})()


