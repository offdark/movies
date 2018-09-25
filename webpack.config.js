const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugon = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.js',
    print: './src/app/print.js'
  },
  plugins: [
    new CleanWebpackPlugon(['dist']),
    new HtmlWebpackPlugin({
      title: 'jsMentoring',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     {
        test: /\.js$/,
        loader: 'babel-loader'//,
        //exclude: '/node_modules/'
      }, 
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: false,
    hot: true
  }
};