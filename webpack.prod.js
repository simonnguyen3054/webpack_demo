const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //minify css
const TerserPlugin = require("terser-webpack-plugin"); //minify js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js", //output main.hash.bundle.js in dist directory
    path: path.resolve(__dirname, "dist")
  },
  optimization: { //minfying templates
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({ //new html file is generarted by webpack given our template html
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ //extract css into new file
      filename: "[name].[contentHash].css"
    }),
    new CleanWebpackPlugin() //delete main file everytime we run npm run build
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, //3 extract css into files
          "css-loader", //2. turn css into commonjs
          "sass-loader" //1. turn sass into css
        ]
      }
    ]
  }
});
