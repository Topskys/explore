/*
 * @Author: Topskys
 * @Date: 2022-12-24 21:33:44
 * @LastEditTime: 2022-12-24 21:56:09
 * mongoose数据库连接模块
 * npm i mongoose --save
 */


const mongoose=require('mongoose');


module.exports =()=>{
    mongoose.connect('mongodb://localhost:27017/jianshu',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('The MongoDB has been connected successfully.')
    }).catch(err=>{
        console.error('A failure to release database connections',err)
    })
}