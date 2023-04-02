const fs = require('fs')
const path = require('path')
const {marked} = require('marked')
const browserSync = require('browser-sync')


// 01 读取 md 和 css 内容
// 02 读取template内容替换占位符，生成html字符串
// 03 将html字符串写入指定的 *.html 文件中
// 04 监听 index.md 文档内容的变化，更新html内容
// 05 使用 browser-sync 实现index.html内容的展示
let mdPath = path.join(__dirname, process.argv[2]) // 获取终端输入的命令 nodemon ./02-md-to-html.js index.md // process.argv[2] == 'index.md'
let cssPath = path.resolve('github.css') // 获取绝对路径
let htmlPath = mdPath.replace(path.extname(mdPath), '.html') // 修改文件扩展名
//console.log(mdPath,cssPath,htmlPath)  // 终端： pwd  // 输出当前目录

fs.watchFile(mdPath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        fs.readFile(mdPath, 'utf-8', (err, data) => {
            let htmlStr = marked(data) // md to html
            fs.readFile(cssPath, 'utf-8', (err, data) => {
                let resHtml = template.replace('{{content}}', htmlStr).replace('{{style}}', data)
                // 将上述内容写入指定的 html 文件中，用于浏览器里展示
                fs.writeFile(htmlPath, resHtml, (err) => {
                    !err && console.log('md转html成功')
                })
            })
        })
    }
})

browserSync.init({
    browser: '', // 默认浏览器
    server: __dirname,
    watch: true, // 热更新
    index: path.basename(htmlPath) // index.html
})

const template = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>md to html</title>
    <style>
        .md-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 45px;
        }

        @media (max-width: 750px) {
            .md-body {
                padding: 15px;
            }
        }
        {{style}}
    </style>
</head>
<body>
    <div class="md-body">{{content}}</div>
</body>
</html>`