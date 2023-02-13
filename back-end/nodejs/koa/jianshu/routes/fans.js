/*
 * @Author: Topskys
 * @Date: 2022-12-30 17:31:31
 * @LastEditTime: 2022-12-30 17:43:35
 */
const fans = require('../controller/fans');
const router = require('koa-router')();


router.prefix('/fans')




router.post('/follow', fans.follow)


router.post('/unfollow', fans.unfollow)



router.get('/findAll', fans.findAll)




module.exports =router