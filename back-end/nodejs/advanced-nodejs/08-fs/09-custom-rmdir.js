const fs = require('fs')
const path = require('path')


/**
 * 需求：自定义一个函数，接收一个路径，执行删除
 * 01 判断当前传入的路径是否为一个文件，直接删除当前文件即可
 * 02 如果当前传入的是一个目录，则需要读取目录的内容，再执行删除
 * 03 将删除行为定义成一个函数，可通过递归调用
 * 04 将当前的名称拼接成在删除时可使用的路径
 */
function myRmdir(dirPath,cb){
    fs.stat(dirPath,(err,statObj)=>{
        if(statObj.isDirectory()){ // 是目录
            fs.readdir(dirPath,(err, files)=>{
                let dirs=files.map(item=>{
                    return path.join(dirPath,item)
                })
                let index=0
                function next(){
                    if(index==dirs.length) return fs.rmdir(dirPath,cb)
                    let current=dirs[index++]
                    myRmdir(current,next)
                }
                next()
            })
        }else{ // 是文件
            fs.unlink(dirPath,cb)
        }
    })
}

myRmdir('temp',()=>console.log('删除成功'))