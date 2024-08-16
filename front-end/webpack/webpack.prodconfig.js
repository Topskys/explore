const base = require('./webpack.baseconfig.js')
const merge = require('webpack-merge').merge
const webpack = require('webpack')

// 本次温习webpack编写的配置文件包括：webpack.baseconfig.js、webpack.devconfig.js、webpack.prodconfig.js、webpack.prodconfig.js、webpack.dll.config.js

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        // 告知webpack不用打包第三方依赖了，因为我们已经提前打包了，
        // 但需要在html模版head标签的script引入vendor.dll.js
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require(__dirname + './vendor-manifest.json') 
        }),
        // 定义全局变量，给业务代码提供变量
        new webpack.DefinePlugin({
            baseUrl: "www.test.com"
        }),
    ]
})