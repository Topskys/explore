const path = require('path')

// 1.获取路径中的基础名称，返回路径最后的部分
//console.log(__filename,'\n', // D:\MyProject\explore\back-end\nodejs\advanced-nodejs\06-path.js
//            path.basename(__filename),'\n', //  06-path.js
//            path.basename(__filename,'.js'),'\n', // 06-path
//            path.basename(__filename,'.css'),'\n', // 06-path
//            path.basename('a/b/c'),'\n', // c
//            path.basename('a/b/c/'),'\n', // c
//            )

// 2.获取路径目录路径，返回最后部分的上一层目录路径
//console.log(path.dirname(__filename),'\n', // D:\MyProject\explore\back-end\nodejs\advanced-nodejs
//            path.dirname('a/b/c'),'\n', // a/b
//            path.dirname('a/b/c/') // a/b
//            )

// 3.获取路径文件的扩展名
//console.log(path.extname(__filename),'\n', // .js
//            path.extname('a/b'),'\n', //
//            path.extname('a/b/index.html.js.css'),'\n', // .css
//            path.extname('a/b/index.html.js.') // .
//            )

// 4.解析路径
//const obj1=path.parse('a/b/index.js')
//const obj2=path.parse('/a/b/')
//const obj3=path.parse('./a/b/')
//console.log(obj1,'\n', // { root: '', dir: 'a/b', base: 'index.js', ext: '.js', name: 'index' }
//            obj2,'\n', // { root: '/', dir: 'a', base: 'b', ext: '', name: 'b' }
//            obj3,'\n', // { root: '', dir: './a', base: 'b', ext: '', name: 'b' }
//            obj1.base
//            )

// 5.序列化路径
//const obj=path.parse('./a/b/c')
//console.log(path.format(obj)) // ./a/b\c

// 6.判断当前路径是否为绝对
//console.log(path.isAbsolute('a'),
//            path.isAbsolute('a/b/c'),
//            path.isAbsolute(''),
//            path.isAbsolute('./b/c'),
//            path.isAbsolute('../b/c'),
//            path.isAbsolute('//////a/b/c'))
////false false false false false true

// 7.路径拼接
//console.log(path.join('a/b', 'c', 'index.js'),
//    path.join('/a/b', 'c', 'index.js'),
//    path.join('/a/b', 'c', 'index.js'),
//    path.join('/a/b', 'c', '', 'index.js'),
//    path.join('/a/b', 'c', './', 'index.js'),
//    path.join('/a/b', 'c', '../', 'index.js'),
//    path.join(''), // 当前工作目录
//)
// a\b\c\index.js \a\b\c\index.js \a\b\c\index.js \a\b\c\index.js \a\b\c\index.js \a\b\index.js .

// 8.规范化路径
//console.log(path.normalize(''),
//    path.normalize('a/b/c'),
//    path.normalize('a///b//c../d\\/e\\f\g'),
//)
//. a\b\c a\b\c..\d\e\fg

// 9.绝对路径
//console.log(path.resolve(),// resolve([form],to)
//    path.resolve('a', 'b'),
//    path.resolve('a', 'b', ''),
//    path.resolve('a', '/b', ''),
//    path.resolve('a', '//b', ''),
//    path.resolve('/a', 'b'),
//    path.resolve('a', 'b/'),
//    path.resolve('a', '../b'),
//    path.resolve('index.js'),
//)
//D:\MyProject\explore\back-end\nodejs\advanced-nodejs
//D:\MyProject\explore\back-end\nodejs\advanced-nodejs\a\b
//D:\MyProject\explore\back-end\nodejs\advanced-nodejs\a\b
//D:\b
//D:\b
//D:\a\b
//D:\MyProject\explore\back-end\nodejs\advanced-nodejs\a\b
//D:\MyProject\explore\back-end\nodejs\advanced-nodejs\b
//D:\MyProject\explore\back-end\nodejs\advanced-nodejs\index.js