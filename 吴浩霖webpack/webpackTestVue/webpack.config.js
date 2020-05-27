
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'min.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    // require时省略的扩展名，遇到.vue结尾的也要去加载
    extensions: ['.vue', '.js'],
    // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_module)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_module)/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: '8091',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
}