module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'API': '@/API',
                "views": '@/views'
            }
        }
    },
    devServer: {
        proxy: {
            '/proxy': {
                //  接口请求路径
                target: `http://localhost:4000`,
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            },
        },
         //after: require('.src/mock/index.js'),
    }

    // 配置 webpack-dev-server 行为。
    //     devServer: {
    //         // host: 'localhost',
    //         host:'192.168.43.118', //设置自定义IP地址（本机ip4地址）方便真机测试效果
    //         port: 8080,
    //         },
}
// const temp = {
//     devServer: {
//         // after: require('./mock/mock-server.js')
//         proxy: {
//             [process.env.VUE_APP_BASE_API + '/user/info']: {
//                 target: `http://localhost:${port}/mock`,
//                 changeOrigin: true,
//                 pathRewrite: { ['^' + process.env.VUE_APP_BASE_API]: '' }
//             },
//             [process.env.VUE_APP_BASE_API]: {
//                 target: process.env.VUE_APP_BASE_API,
//                 changeOrigin: true,
//                 pathRewrite: {
//                     ['^' + process.env.VUE_APP_BASE_API]: ''
//                 }
//             }
//         },
       
//     }
// }
