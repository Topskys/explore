// Webpack公共配置文件
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require('webpack');

module.exports = {
    mode: 'none',
    entry: "./src/index.js",
    output: {
        filename: "bundle.js", 
        path: path.join(__dirname, "dist"),  
    },
    devtool:'source-map', 
    devServer: {
        static: {
            directory: path.join(__dirname, "./public"),
        },
        compress: true, // 压缩资源
        port: 9000,
        open: true,//是否打开默认浏览器
        hot: true, 
        proxy: {
            '/api': {
                target: 'http://localhost:8080',//代理目标地址
                changeOrigin: true,//开启代理
                pathRewrite: { '^/api': '' }, // 路径重写
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'], // 插件集合
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10 * 1024, // 需要file-loader
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        sources: {
                            list: [
                                '...',// 所有默认支持的标签和属性，这个一定要加上，不然就只会检测a标签了
                                { tag: 'a', attribute: 'href', type: 'src' }
                            ]
                        }
                    }
                }
            },
            // 自制md-loader
            {
                test: /\.md$/,
                use: [
                    'html-loader',
                    "./src/md-loader"
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "Webpack Plugin Sample",
            meta: {
                viewport: "width=device-width, initial-scale=1, maximum-scale=1.0"
            },
            // 指定自定义模板
            template: "./src/template-index.html",
        }),
        // HMR
        new webpack.HotModuleReplacementPlugin(),
    ],

}

 