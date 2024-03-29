"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
  return {
    context: path.join(__dirname, "./src"),
    entry: {
      ts: "./index.ts"
    },
    output: {
      library: "notifier",
      libraryTarget: "umd",
      path: path.join(__dirname, "./target"),
      filename: argv.mode === "production" ? "notifier.min.js" : "notifier.js",
      libraryExport: "default",
      umdNamedDefine: true,
      globalObject: 'this'
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            }
          },
          canPrint: true
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  autoprefixer()
                ]
              }
            }]
        },
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: argv.mode === "production" ? "notifier.min.css" : "notifier.css"
      })
    ]
  }
}
