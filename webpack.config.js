const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], //note: elements are loaded in reversed order. css-loaded(translate css to js) => style-loader(inject style into dom)
      },
    ],
  },
}