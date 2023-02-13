/*
 * @Author: Topskys
 * @Date: 2022-12-30 16:51:50
 * @LastEditTime: 2022-12-30 16:55:06
 */
const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    username:String,
    author:String,
    articleTitle:String,
    articleId:Number,
    content:String,
    createTime:String,
})



const Comment=mongoose.model('comments',schema)


module.exports=Comment