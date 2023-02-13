// vue项目的配置文件
module.exports = {
    lintOnSave: false, //暂时关闭代码格式监测

    //反向代理
    devServer: {
        port: 8080, //可以修改端口号
        proxy: {
            // 1
            // '/ajax': { // 接连以'/ajax'开头的请求
            //     target: 'https://m.maoyan.com',
            //     // host: 'xx.com',
            //     changeOrigin: true
            // }


            // 2
            '/Topsky': { // 接连以'/ajax'开头的请求
                target: 'https://m.maoyan.com',
                // host: 'xx.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/Topsky': ''
                }
            }
        }
    },

    // alias别名配置
    //@ is an alias to / src
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             'assets': '@/assets',
    //             'components': "@/components",
    //             'views': '@/views',
    //         },
    //     },
    // },



}