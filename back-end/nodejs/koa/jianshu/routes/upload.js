/*
 * @Author: Topskys
 * @Date: 2022-12-27 17:52:54
 * @LastEditTime: 2022-12-29 21:41:55
 */
const router = require('koa-router')();
const Multer = require('koa-multer');
const fs = require('fs');
const path = require('path');



router.prefix('/upload')



let storage = Multer.diskStorage({
    // 设置文件存储位置 
    destination: function (req, file, cb) {
        let date = new Date();
        let [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

        let dir = `./public/uploads/${year}${month}${day}`

        // 判断目录是否存在，否则创建目录
        !fs.existsSync(dir) && fs.mkdirSync(dir, {
            recursive: true
        })

        cb(null, dir)
    },
    filename: function (req, file, cb) {
        // 设置上传文件名
        let fileName = `${Date.now()}${path.extname(file.originalname)}`

        cb(null, fileName)
    }
})

let upload = Multer({ storage })






// 上传图片接口
router.post('/img', upload.single('file'), async ctx => { // form-data》》myfile(key)  SelectFiles
console.log("Hi Video")

    let url = ctx.req.file.path

    ctx.body = {
        url: (ctx.origin + '' + url.replace(/[\\\\]/g, '/').replace('public', ''))
    }
})



router.post('/editor/img', upload.single('editorFile'), async ctx => { // form-data》》myfile(key)  SelectFiles

    let url = ctx.req.file.path
    url = (ctx.origin + '' + url.replace(/[\\\\]/g, '/').replace('public', ''))
    ctx.body = {
        errno: 0,
        data: {
            url, 
            alt: '', 
            href: ''
        }
    }
})


module.exports = router