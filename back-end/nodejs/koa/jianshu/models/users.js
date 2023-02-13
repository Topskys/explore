/*
 * @Author: Topskys
 * @Date: 2022-12-25 20:38:58
 * @LastEditTime: 2022-12-31 15:12:28
 */
const mongoose = require('mongoose')


// 用户模型对象
const schema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        select: false,// 查询时，不显示密码 
    },
    avatarUrl: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
})



const Users = mongoose.model('users', schema)



module.exports = {
    Users
}