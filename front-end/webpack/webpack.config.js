// Webpack配置文件（可选），仅支持CommonJS规范。
const path = require('path');
const { webpack } = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')


/**
 * 自定义webpack插件，删除打包代码买一行开头的注释
 * 原理：通过在生命周期的钩子中挂载函数实现扩展。
 */
class MyPlugin {
    apply(compiler) {
        console.log("MyPlugin is running.");
        compiler.hooks.emit.tap("MyPlugin", compilation => {
            // compilation：可理解为本次打包的上下文
            for (const fName in compilation.assets) {
                if (fName.endsWith(".js")) {
                    const fContent = compilation.assets[fName].source();
                    // 删除development模式产生的注释
                    const withoutContent = fContent.replace(/\/\*\*+\*\//g, "");
                    // 覆盖源文件
                    compilation.assets[fName] = {
                        source: () => withoutContent,
                        size: () => withoutContent.length,
                    }
                }
            }
        })
    }
}

/**
 * 方式一
 */
// module.exports = {
//     // 指定打包模式（production（default）、development、none）
//     mode: 'none',
//     // 打包的程序入口文件
//     entry: "./src/index.js",
//     // module需要添加对应loader，Webpack默认js-loader。
//     // 也可以在index.js中引入样式index.css并使用。
//     // entry: "./src/index.css",
//     // 指定输出文件的位置
//     output: {
//         filename: "bundle.js", // 输出文件名称
//         path: path.join(__dirname, "dist"),  // 文件生成存放路径（绝对路径）
//         // publicPath: "my-dist/", // 网站默认位置，
//     },
//     // 生成source-map文件，便于代码调式。
//     // 开发环境建议使用cheap-module=eval-source-map，生产环境为none
//     devtool:'source-map',
//     // Webpack-dev-server 静态资源访问
//     devServer: {
//         //本地服务器所加载的页面所在的目录 '' ['']
//         // 新webpack版本不支持
//         // contentBase: path.join(__dirname, "./public"),
//         static: {
//             directory: path.join(__dirname, "./public"),
//         },
//         compress: true, // 压缩资源
//         port: 9000,
//         open: true,//是否打开默认浏览器
//         /**
//          * HMR(模块热替换)，JS需要手动处理。
//          * import edit from "./editor"
//          * module.hot.accept("./editor",()=>{
//          *      console.log("editor模块更新了，需要在这里手动处理热替换逻辑")
//          * })
//          * 但是想要捕获hot逻辑错误，需要使用hotOnly:true
//          */
//         hot: true,
//         // 开发代理
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8080',//代理目标地址
//                 changeOrigin: true,//开启代理
//                 pathRewrite: { '^/api': '' }, // 路径重写
//             }
//         }
//     },
//     // 资源模块加载
//     module: {
//         // 默认当作js处理（js-loader），因此需要loader单独处理css
//         rules: [
//             // yarn add babel-loader @babel/core @babel/preset-env --dev
//             // 替换原有js-loader，将ES6+转换成ES5
//             {
//                 test: /\.js$/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ['@babel/preset-env'], // 插件集合
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     "style-loader",
//                     "css-loader"
//                 ], //[1,2] run 2 to 1, css to js
//             },
//             {
//                 test: /\.png$/,
//                 // use:"file-loader",
//                 // or Data-URLs（可以base64格式展示任何数据，还不用向服务请求文件资源。）
//                 // 打包完后不再在my-dist下生成对应图片文件了，但打包文件大时加载js文件会变慢。
//                 use: {
//                     loader: "url-loader",
//                     options: {
//                         // 小于limit字节(10KB)的文件转为DataURL,否则使用传统方式实现，解决打包js文件过大的问题。
//                         limit: 10 * 1024, // 需要file-loader
//                     }
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: {
//                     loader: "html-loader",
//                     options: {
//                         // 标签属性的额外处理，让其支持标签的属性
//                         // attrs:["img:src", "a:href"], // older way
//                         // new way
//                         sources: {
//                             list: [
//                                 // { tag: 'img', attribute: 'src', type: 'src' },
//                                 '...',// 所有默认支持的标签和属性，这个一定要加上，不然就只会检测a标签了
//                                 { tag: 'a', attribute: 'href', type: 'src' }
//                             ]
//                         }
//                     }
//                 }
//             },
//             // 自制md-loader
//             {
//                 test: /\.md$/,
//                 use: [
//                     'html-loader',
//                     "./src/md-loader"
//                 ],
//             },
//         ]
//     },
//     // 插件（webpack钩子机制）
//     plugins: [
//         // 打包前清除上一次的打包文件（dist）
//         new CleanWebpackPlugin(),
//         // index.html动态载入bundle.js，要注释掉 output.publicPath
//         // <script src="dist/bundle.js"></script>
//         new HTMLWebpackPlugin({
//             // index.html配置，大改建议自定义template-index.html
//             title: "Webpack Plugin Sample",
//             meta: {
//                 viewport: "width=device-width, initial-scale=1, maximum-scale=1.0"
//             },
//             // 指定自定义模板
//             template: "./src/template-index.html",
//         }),
//         // use to create about.html
//         // new HTMLWebpackPlugin({
//         //     filename:"about.html"
//         // }),
//         // 将public不参与构建的静态文件复制到输出目录。
//         // 开发环境，建议使用Webpack-dev-server 访问静态资源，上线前打包采用copy方式。
//         // new CopyWebpackPlugin(
//         // older
//         // [
//         //     'public/**',
//         //     // 'public'
//         // ]
//         // lastest
//         // {
//         //     patterns: [
//         //         // 'public/**', // dist/public/** way 1
//         //         'public', // dist/**  way 2
//         //         // { from: "public", to: "" }, // way 3
//         //     ],
//         // }),
//         new MyPlugin(),
//         // HMR
//         new webpack.HotModuleReplacementPlugin(),
//     ],

// }


/**
 * 方式二
 * @param {*} env 
 * @param {*} argv 
 */
module.exports = (env, argv) => {
    const config = {
        // 指定打包模式（production（default）、development、none）
        mode: 'none',
        // 打包的程序入口文件
        // entry: "./src/index.js",
        // module需要添加对应loader，Webpack默认js-loader。
        // 也可以在index.js中引入样式index.css并使用。
        // entry: "./src/index.css",
        /**
             * Code Splitting，分包（代码分割，将不同模块打包到多个bundle）
             * 1.多入口打包（合适多页应用）
             * 2.动态导入
             */
        // entry:{
        //     // 多入口
        //     index: './src/index.js',
        //     album: './src/album.js'

        // },
        // 指定输出文件的位置
        output: {
            filename: "bundle.js", // 输出文件名称
            // 多輸出
            // filename: "[name]bundle.js", 
            // 输出文件名hash，用于解决缓存问题。（建议适应chunkHash:strLength）
            // filename: '[name]-[hash:8].bundle.js',
            path: path.join(__dirname, "dist"),  // 文件生成存放路径（绝对路径）
            // publicPath: "my-dist/", // 网站默认位置，
        },
        // 生成source-map文件，便于代码调式。
        // 开发环境建议使用cheap-module=eval-source-map，生产环境为none
        devtool: 'source-map',
        // Webpack-dev-server 静态资源访问
        devServer: {
            //本地服务器所加载的页面所在的目录 '' ['']
            // 新webpack版本不支持
            // contentBase: path.join(__dirname, "./public"),
            static: {
                directory: path.join(__dirname, "./public"),
            },
            compress: true, // 压缩资源
            port: 9000,
            open: true,//是否打开默认浏览器
            /**
             * HMR(模块热替换)，JS需要手动处理。
             * import edit from "./editor"
             * module.hot.accept("./editor",()=>{
             *      console.log("editor模块更新了，需要在这里手动处理热替换逻辑")
             * })
             * 但是想要捕获hot逻辑错误，需要使用hotOnly:true
             */
            hot: true,
            // 开发代理
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',//代理目标地址
                    changeOrigin: true,//开启代理
                    pathRewrite: { '^/api': '' }, // 路径重写
                }
            }
        },
        // 资源模块加载
        module: {
            // 默认当作js处理（js-loader），因此需要loader单独处理css
            rules: [
                // yarn add babel-loader @babel/core @babel/preset-env --dev
                // 替换原有js-loader，将ES6+转换成ES5
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
                        // "style-loader", // html中通過style標籤引入css
                        /**
                         * 樣式文件體積過大時，單獨將樣式提取到一個文件中，通過link的方式導入。
                         */
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ], //[1,2] run 2 to 1, css to js
                },
                {
                    test: /\.png$/,
                    // use:"file-loader",
                    // or Data-URLs（可以base64格式展示任何数据，还不用向服务请求文件资源。）
                    // 打包完后不再在my-dist下生成对应图片文件了，但打包文件大时加载js文件会变慢。
                    use: {
                        loader: "url-loader",
                        options: {
                            // 小于limit字节(10KB)的文件转为DataURL,否则使用传统方式实现，解决打包js文件过大的问题。
                            limit: 10 * 1024, // 需要file-loader
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader",
                        options: {
                            // 标签属性的额外处理，让其支持标签的属性
                            // attrs:["img:src", "a:href"], // older way
                            // new way
                            sources: {
                                list: [
                                    // { tag: 'img', attribute: 'src', type: 'src' },
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
        // 插件（webpack钩子机制）
        plugins: [
            // 打包前清除上一次的打包文件（dist）
            new CleanWebpackPlugin(),
            // index.html动态载入bundle.js，要注释掉 output.publicPath
            // <script src="dist/bundle.js"></script>
            new HTMLWebpackPlugin({
                // index.html配置，大改建议自定义template-index.html
                title: "Webpack Plugin Sample",
                meta: {
                    viewport: "width=device-width, initial-scale=1, maximum-scale=1.0"
                },
                // 指定自定义模板
                template: "./src/template-index.html",
                /**
                 * 多頁面打包時，給每個頁面配置對應js。（多入口打包）
                 * <script src="./album.bundle.js"></script>
                 */
                // chunks:['album']
            }),
            // use to create about.html
            // new HTMLWebpackPlugin({
            //     filename:"about.html"
            // }),
            // 将public不参与构建的静态文件复制到输出目录。
            // 开发环境，建议使用Webpack-dev-server 访问静态资源，上线前打包采用copy方式。
            // new CopyWebpackPlugin(
            // older
            // [ 
            //     'public/**',
            //     // 'public'
            // ]
            // lastest
            // {
            //     patterns: [
            //         // 'public/**', // dist/public/** way 1
            //         'public', // dist/**  way 2
            //         // { from: "public", to: "" }, // way 3
            //     ],
            // }),
            new MyPlugin(),
            // HMR
            new webpack.HotModuleReplacementPlugin(),
            // 全局注入可能发生变化的值
            new webpack.DefinePlugin({
                // value必须符合js语法规则
                API_BASE_URL: JSON.stringify('http://localhost:8080'), // '"http://localhost:8080"'
            }),
            new MiniCssExtractPlugin({
                // 输出文件名hash
                // filename: '[name]-[hash:8].bundle.css'
            }),
        ],
        // 集中配置webpack内部优化
        optimization: {
            /**
             * Tree Shaking，用于打包时去除未使用的代码片段，在生产模式自动开启，当然必须在ESM规范下进行。
             * 但是它并不是webpack的某一个配置项，当然在其他模式可以手动配置Tree Shaking。
             */
            /**
             * Tree Shaking的使用
             * 标记导出未引用的代码
             */
            usedExports: true,
            /**
             * 配合usedExports去除导出未引用的代码
             */
            minimum: true,

            /**
             * Scope Hosting，作用域提升，一般配合Tree Shaking使用。
             * 将所有模块合并到一起，打包时输出到一个文件中，打包体积又减小很多。
             */
            concatenateModules: true,


            /**
             * Tree Shaking 与 Babel
             * presets:[['@babel/preset-env',{modules:'commonjs'||false}]]
             */


            /**
             * 副作用，用于检查打包时某个代码片是否有副作用，否则改代码片段将不被打包。
             * sideEffects与Tree Shaking无关系，生产模式自启。
             * 列如：
             * Number.prototype.add=()=>{} 且不到处该模块，就是副作用代码。
             */
            sideEffects: true,

            /**
             * 提取公共模塊（多入口多頁面打包）
             */
            splitChunks: {
                chunks: 'all'
            },

            /**
             * 動態導入，按需加載
             * 在代碼區域使用import()實現
             * 示例：
             * import("url").then(({default})=>{default()}),
             */

            /**
             * 魔法注釋，命名輸出文件名稱。
             * webpackChunkName:'components'
             */
            // import(/* webpackChunkName:'components' */"url").then(({ default}) => {default()})

            /**
             * 自定義壓縮，默認只會壓縮JS代碼，其他代碼需要自己配置。
             */
            minimizer: [
                // 压缩JS
                new TerserWebpackPlugin(),
                // 压缩CSS
                new OptimizeCssAssetsWebpackPlugin(),
            ],


        }

    }

    if (env === "production") {
        config.mode = 'production';
        config.devtool = false;
        config.plugins = [
            ...config.plugins,
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin(['public'])
        ]
    }
    return config;
}

/**
 * 方式三
 * 拆分成common、dev、prod三个文件
 */