const base = require('./webpack.baseconfig.js')
const merge = require('webpack-merge').merge
const webpack = require('webpack')

// 本次温习webpack编写的配置文件包括：webpack.baseconfig.js、webpack.devconfig.js、webpack.prodconfig.js、webpack.prodconfig.js、webpack.dll.config.js

// 优化：dll优化，将第三方库单独打包（提前打包，以加快打包速度，打包后需要告诉打包业务代码的，并手动使用script将该打包结果引入到模版index.html中）
module.exports = merge(base, {
    mode: 'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'antd',
            'moment',
            'lodash',
            // ...
        ] // 需要打包的第三方库
    },
    output: {
        filename: '[name].dll.js',
        path: __dirname + '/dist', // 打包后的文件存放的地方
        library: '[name]_library' // 打包后的文件名
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library', // 和 output.library 一致
            path: __dirname + '/dist/[name]-manifest.json', // 生成manifest文件
            context: __dirname, // 当前目录 
        })
    ]
})