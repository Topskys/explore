const express = require('express')
const router = express.Router()


//导入文章处理函数模块
const article_handler = require('../router_handler/article')


//发布文章的路由
router.post('/add', article_handler.addArticle)




module.exports = router