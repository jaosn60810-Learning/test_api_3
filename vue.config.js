//vue.config.js
module.exports = {
  // publicPath:
  //   process.env.NODE_ENV === 'production'
  //     ? '/test_api_3/' // test20200915 為 repo 名稱
  //     : '/',
  publicPath: '/dist/',
  devServer: {
    // port: 8080,
    // host: 'localhost',
    // https: false,
    // 自动启动浏览器
    // open: false,
    proxy: {
      '/api': {
        target: 'https://warm-helix-333707.appspot.com/', //设置调用的接口域名和端口
        changeOrigin: true, //是否跨域
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
