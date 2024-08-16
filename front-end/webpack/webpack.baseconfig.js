const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const dotenv = require('webpack-dotenv');
const BundleAnalyzer =require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require(path)
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //自动清除dist目录  
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); // 压缩css
const TerserPlugin = require('terser-webpack-plugin'); // 压缩js

const isProduction = process.env.NODE_ENV === "production";

// 本次温习webpack编写的配置文件包括：webpack.baseconfig.js、webpack.devconfig.js、webpack.prodconfig.js、webpack.prodconfig.js、webpack.dll.config.js

// 修改./package.json中的scripts（cross-env用于修改process.env.NODE_ENV）
// "dev":"cross-env NODE_ENV=development webpack-dev-server --config ./webpack.devconfig.js"
// "build":"cross-env NODE_ENV=production  webpack serve --config ./webpack.prodconfig.js"
// "build-json":"cross-env NODE_ENV=production  webpack serve --config ./webpack.prodconfig.js --json> stats.json" // 打包成stats.json文件，用到于官方提供的平台（webpack.github.io/analyse）分析打包结果（不推荐）
// or
// "dev":"webpack-dev-server --config ./webpack.devconfig.js --env development" // 需要把配置弄成函数才能接收env变量module.exports=function(env){console.log(env)return merge(base(env),{mode:'development',devtool:'eval-cheap-source-map',})}

/**
 * 优化
 * webpack在生产环境会压缩（伴随混淆）代码，开发环境不会压缩代码。
 * tree-shaking（摇树）去除无用代码（写了不使用的）打包，
 * 只不支持(class es-class)或function add(a,b){} add.prototype.f1=function(){console.log('tree-shaking无效')}这种写法，
 * mode=‘production’时，默认开启
 * https://www.webpackjs.com/guides/tree-shaking/
 */


const plugins = [
    new htmlWebpackPlugin({
        template: "./index.html", // 模板文件
        filename: "index.html", // 打包后的html文件名
    }),
    new dotenv({
        path: "./.env", // 加载.env文件
    }),
    new BundleAnalyzer(), // 分析打包结果（推荐）
    new CleanWebpackPlugin(), // 清除dist目录
]

function hasMiniCss() {
    if (isProduction) {
        plugins.push(new MiniCss({
            filename: "test.bundle.css",
            // filename: "[name].[chunkhash:8].css",
        }))
    }
}
hasMiniCss();


module.exports = {
    // 打包模式，development 开发模式，production 生产模式
    mode: "",
    // 入口文件
    entry: "./src/index.js",
    // 出口文件
    output: {
        path: __dirname + "/dist", // 输出文件存放的路径
        filename: "[name].[chunkhash:8].bundle.js", // 输出原名.8位哈希.bundle.js文件的名称
        publickPath:'www.xxx-cdn.com',  // CDN地址
    },
    // 开发模块配置
    devServer: {},
    // 处理模块的规则
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader", // es6+ to es5
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ? MiniCss.loader : "style-loader", // 抽离css并插入html模版 根据打包模式选择使用style-loader还是mini-css-extract-plugin
                    "css-loader",
                    "postcss-loader", // 可新建postcss.config.js并配置：module.exports={plugins:[require('autoprefixer')]}代替下面的options
                // {
                //     loader:'postcss-loader',
                //     options:{
                //         postcssOptions:{
                //             plugins:[
                //                 require('autoprefixer')
                //             ]
                //         }
                //     }
                // },//样式兼容：配合autoprefixer&browserslist给CSS3属性设置前缀「兼容」
                "less-loader",
                ] // ... css-loader 解析css文件，style-loader 将解析后的css文件以style标签的形式插入到html中
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "javascript/auto", //webpack5需要的
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 把指定大小内的图片BASE64「<=200KB则需要BASE64J 
                        // 作用：把合适大小的图片转成base64，就不需要重新去向服务器请求图片了，减少网络请求
                        limit: 200 * 1024,
                        esModule: false,
                        //编译后，没有BASE64的图片，编译输出的路径和名称
                        name: "images/[name].[hash:8].[ext]"
                    }
                }]
            }
        ]
    },
    // 插件模块配置
    plugins,
    // 优化模块配置
    optimization: {
        // 设置压缩方式
        minimize: [
            new CssMinimizerWebpackPlugin(), // 压缩css
            new TerserPlugin(), // 压缩js
        ],
        // 代码分割
        splitChunks: {
            chunks: "all", // 要分割哪种代码 all,async（异步）,initial（同步）
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "vendors.[chunkhash:8].js",
                    chunks: "all",
                    minChunks: 1,
                },
                common: {
                    filename: "common.[chunkhash:8].js",
                    chunks: "all",
                    minChunks: 2,
                    minSize: 0,
                }
            }
        },
        // 提取runtime代码文件（不是业务代码）
        runtimeChunk: {
            name: "runtime",
        }
    },
    // 解析模块的规则
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
      extensions:['.js','.ts','.json','.vue','.jsx','.tsx'] // 引入时可省略后缀的文件
    },
    /* 设置打包的最大资源包大小 */
    performance: {
        // hints: 'warning',
        maxAssetSize: 200 * 1024 * 1024,
        maxEntrypointSize: 100 * 1024 * 1024,
    },

}