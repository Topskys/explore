const fs = require('fs')


// accesss，判断文件是否有操作权限
//fs.access('text3.txt', err => {
//    if (err) {
//    } else {
//        console.log('有操作权限')
//    }
//})


// stat，文件状态信息
//fs.stat('text3.txt',(err,statObj)=>{
//    console.log(statObj)
//})


// mkdir，创建目录
//fs.mkdir('a/b/c',{recursive:true},err=>{ // c (folder) recursive：递归
//    if (err) {
//        console.error(err)
//    } else {
//        console.log('创建成功')
//    }
//})


// rmdir，删除目录
//fs.rmdir('a/b/c',{recursive:true}, err => { // delete c
//    if (err) {
//        console.error(err)
//    } else {
//        console.log('删除成功')
//    }
//})


// readdir，读取目录
//fs.readdir('../08-fs', (err, files) => {
//    if (err) {
//        console.error(err)
//    } else {
//        console.log(files)
//    }
//})


// unlink，删除文件
//fs.unlink('a/a.txt', err => {
//    if (err) {
//        console.error(err)
//    } else {
//        console.log('删除成功')
//    }
//})