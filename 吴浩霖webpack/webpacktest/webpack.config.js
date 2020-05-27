/*
 * @Author: S.M.D 
 * @Date: 2019-12-06 21:36:20 
 * @Last Modified by: S.M.D
 * @Last Modified time: 2020-01-14 16:42:21
 */
// const polyfill = require('@babel/polyfill')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/main.js'],
  // entry: './src/utils/jquery.js',
  output: {
    // filename: '[name].[chunkhash].js', // [name].[id].[hash:8].js
    filename: '[name].[hash].js', // [name].[id].[hash:8].js
    path: resolve('build'),
    // chunkFilename: '[name].js',
    // publicPath: 'http://smd.test.com/aaa/js/',
    // crossOriginLoading: 'use-credentials', // anonymous(默认) 在加载此脚本资源时不会带上用户的 Cookies；use-credentials 在加载此脚本资源时会带上用户的 Cookies。
    // library: '_jq',
    // libraryTarget: 'commonjs', // 这两个配置通常搭配使用 用来打包一些代码
  },
  resolve: {
    alias: {
      "@": resolve('./src/sass')
    },
    // mainFields: ['mymanifileds', 'browser', 'main'] // 当使用某些包时   想用指定的模块代码    使用mainFields属性会找到package.json中的key作为入口
    extensions: ['.ts', '.js', '.json'] // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。
  },
  module: {
    rules: [
      {
        // 查找所有 JavaScript 文件
        test: /\.(js|ts)$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        include: resolve('src'),
        exclude: /(node_modules)/,
        // --js
        // use: {
        //   // loader: 'babel-loader',
        //   // options: {
        //   //   presets: ['@babel/preset-env'],
        //   //   plugins: ['@babel/plugin-proposal-class-properties'] // 如果用到了class语法
        //   // }
        // },
        // --ts
        use:{
          loader:'ts-loader'
        }
      },
      {
        // 处理所有 SCSS 文件
        test: /\.scss$/,
        // 使用一组 Loader 去处理 SCSS 文件。
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      }
    ],
    noParse: /jquery/
  },
  devServer: {
    port: '8091',
    hot: true,
    // contentBase: resolve('build'),
    headers: {
      'smd': 'test'
    }
  },
  // devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    })
  ]
}