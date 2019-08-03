const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //3 inject styles into dom
          "css-loader", //2. turn css into commonjs
          "sass-loader" //1. turn sass into css
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]
};