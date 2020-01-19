const path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'cheap-eval-source-map',
    //entry: './src/main.js',
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/main.js'
    ],
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './dist/index.html'
      })
    ],
    module: {
      /*loaders: [{
        test: /\.css$/,
        loaders: ['style', 'css']
      }]*/
    },
    devServer: {
      contentBase: './dist',
      hot: true
    }
}