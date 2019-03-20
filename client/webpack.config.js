const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname,'src','App.js'),
  output: {
    path: path.join(__dirname,'./'),

     //filename: '../assets/bundledindex.js'
      filename: 'build/bundledindex.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
          test: /\.css$/,
          use: [
                  "style-loader",
                  "css-loader",
               ],
      },
      {
          test: /\.less$/,
          use: [
                  "style-loader",
                  "css-loader",
                  "less-loader",
               ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html')
    })
  ]

};
