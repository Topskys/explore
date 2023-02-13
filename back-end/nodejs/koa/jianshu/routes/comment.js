/*
 * @Author: Topskys
 * @Date: 2022-12-30 16:56:23
 * @LastEditTime: 2022-12-30 17:24:31
 */
const comment =require('../controller/comment');
const router=require('koa-router')();


router.prefix('/comment')


router.post('/add', comment.add)


router.get('/web/find', comment.findById)



router.get('/admin/find', comment.findByAuthor)


module.exports=router;