const base = require('./webpack.baseconfig.js')
const merge = require('webpack-merge').merge

// 本次温习webpack编写的配置文件包括：webpack.baseconfig.js、webpack.devconfig.js、webpack.prodconfig.js、webpack.prodconfig.js、webpack.dll.config.js

module.exports = merge(base, {
    mode: 'development',
    devtool: 'eval-cheap-source-map', // 
    devServer: {},
})
