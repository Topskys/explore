/*
 * @Author: Topskys
 * @Date: 2022-12-24 21:26:30
 * @LastEditTime: 2022-12-27 22:26:15
 */
const router = require('koa-router')()
const userCtl= require('../controller/user')



router.prefix('/users')



router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// router.post('/add', userCtl.userAdd)


// router.post('/update', userCtl.userUpdate)


// router.post('/del', userCtl.userDel)


// router.get('/find', userCtl.userFind)


// router.get('/find/:id', userCtl.userFindOne)


router.post('/login', userCtl.login)


router.post('/reg', userCtl.reg)


router.post('/verify', userCtl.verify)


router.post('/update/password', userCtl.updatePassword)


router.post('/update/personal', userCtl.updatePersonal)



module.exports = router
