const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    outputDir: "dist",   //当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
    publicPath: process.env.NODE_ENV === 'production'? "" : "/",
    assetsDir:"assert",
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src')).set('components', resolve('src/components'))
        //引入全局scss变量
        // const oneOfsMap = config.module.rule('scss').oneOfs.store;
        // oneOfsMap.forEach(item => {
        // item
        //     .use('sass-resources-loader')
        //     .loader('sass-resources-loader')
        //     .options({
        //         // 全局变量资源路径
        //         resources: './src/assets/css/baseCommon.scss'
        //         // 也可以选择全局变量路径数组, 如果你有多个文件需要成为全局,就可以采用这种方法
        //         // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        //         // 或者你可以将多个scss文件@import到一个main.scss用第一种方法，都是可以的
        //     })
        //     .end()
        // })
    },
    lintOnSave: false ,//取消eslint检查
    devServer:{
        port: 8877,
        proxy: {
            '/manage/': {
                // target: 'http://192.168.20.117:16888',//杨
                // target: 'http://192.168.20.46:16888',//毛
                target: 'http://192.168.30.211:16888',//测试地址

                // target: 'http://192.168.20.22:12345/',//朱喆
                // target: 'http://192.168.30.211:12345',//测试地址
                // target: 'http://192.168.20.108:12345',//杨礼银
                // target: 'http://192.168.20.162:8083',//姜越
                source:false,//https需要配置
                pathRewrite: {
                    '^/manage': ''
                  },
                onProxyReq: function (proxyReq, req) {
                    Object.keys(req.headers).forEach(function (key) {
                        proxyReq.setHeader(key, req.headers[key]);
                    });
                },
                onProxyRes: function (proxyRes, req, res) {
                    Object.keys(proxyRes.headers).forEach(function (key) {
                        res.setHeader(key, proxyRes.headers[key]);
                    });
                },
                changeOrigin: true,//是否跨域
            },
           
        }
    },
     //babal显示转义 否则ie11会报错
    //  transpileDependencies:["vue-simple-verify"],
    configureWebpack: {
        devtool:'source-map',
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
}