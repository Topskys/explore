const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => { //1．获取到客户端通过查询字符串，发送到服务器的数据
    const query = req.query
        //2．调用res.send()方法，把数据响应给客户端
    res.send({
        status: 0, //状态，0表示成功，1表示失败
        msg: 'GET请求成功!', //状态描述
        data: query, //需要响应给客户端的具体数据
    })
})

router.post('/post', (req, res) => { //1．获取到客户端通过查询字符串，发送到服务器的数据
    const body = req.body //通过req.body 获取请求包含的 url-encoded 格式的数据
        //2．调用res.send()方法，把数据响应给客户端
    res.send({
        status: 0, //状态，0表示成功，1表示失败
        msg: 'POST请求成功!', //状态描述
        data: body, //需要响应给客户端的具体数据
    })
})


router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
    })
})


module.exports = router