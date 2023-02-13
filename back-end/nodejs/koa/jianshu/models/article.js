/*
 * @Author: Topskys
 * @Date: 2022-12-29 20:19:08
 * @LastEditTime: 2022-12-29 20:23:23
 */
const mongoose = require('mongoose')



// 文章文档模型对象
const schema = new mongoose.Schema({
    id: Number,
    title: String, 
    author: String,
    createTime: String,
    updateTime: String,
    content: String,
    stemfrom: String,
    read: {
        type: Number,
        default: 0
    },
    star: {
        type: Number,
        default: 0
    },
    comment: {
        type: Number,
        default: 0
    }
})




let Article = mongoose.model('articles', schema)


module.exports = Article