// import webpack from "webpack";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
  //   parallel: false, // 关闭thread-loader
  // outputDir: "platform",
  devServer: {
    open: true,
    port: 8081,
    proxy: {
      "/base": {
        // 目标 API 地址
        target: "http://admin.udo.link:9081/",      // 预发布环境
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          "^/base": "/"
        }
      },
      // // swagger exp-guide
      // "/": {
      //   // target:"http://192.168.1.118:8080",      // 东乐本机环境
      //   target: "http://192.168.1.231:8858", //开发环境
      //   ws: false,
      //   // 将主机标头的原点更改为目标URL
      //   changeOrigin: true
      // }
    }
  },
  configureWebpack: {
    // 生产环境不输出console
    optimization: {
      minimizer: [
        // new UglifyJsPlugin({
        //   uglifyOptions: {
        //     compress: {
        //       warnings: false,
        //       drop_console: true, //console
        //       drop_debugger: true
        //     }
        //   }
        // })
      ]
    },
    // 配置项目别名
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        utils: "@/utils",
        // webpack 使用 jQuery，如果是自行下载的
        // 'jquery': path.resolve(__dirname, '../src/assets/libs/jquery/jquery.min'),
        // 如果使用NPM安装的jQuery
        plupload: "plupload"
      }
    },
    plugins: [
      new PrerenderSPAPlugin({
          // 生成文件的路径，也可以与webpakc打包的一致。
          // 下面这句话非常重要！！！
          // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
          staticDir: path.join(__dirname,'dist'),
          // 对应你自己的路由文件，把你想打包成多页面的路由名配置上去，比如a有参数，就需要写成 /a/param1。
          routes: ['/', '/home','/experience','/case','/example'],
          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new Renderer({
              inject: {
                  foo: 'bar'
              },
              // headless: false,
              // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
              renderAfterDocumentEvent: 'render-event'
          })
      }),
    ],
  }
};
