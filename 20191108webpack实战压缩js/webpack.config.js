const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  mode: 'production',
  entry: {
    md5: './src/md5.js',
    function: './src/function.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name]_[hash].js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

}