const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({dev}) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, dev ? 'dist' : 'build'),
    filename: 'main.js'
  },
  devtool: dev ? 'inline-source-map' : 'none',
  devServer: {
    contentBase: './dist',
    port: 3000,
    clientLogLevel: 'info',
    color: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: dev ? new Date().toLocaleTimeString() : 'title',
    })
  ]
});