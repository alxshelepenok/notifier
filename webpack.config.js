var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  context: path.join(__dirname, './src'),
  entry: {
    ts: './index.ts'
  },
  output: {
    path: path.join(__dirname, './dist'),
    library: 'Notifier',
    libraryTarget: 'umd',
    filename: process.env.NODE_ENV == 'production' ? 'notifier.min.js' : 'notifier.js',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loaders: [
          'ts-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ]
}