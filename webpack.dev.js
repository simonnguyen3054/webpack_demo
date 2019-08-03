const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    //output as main.bundle.js. webpack-dev-server store output files in memory
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({ //webpack gernerates a new html file using out given template
      template: "./src/template.html"
    })
  ],
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
  }
});
