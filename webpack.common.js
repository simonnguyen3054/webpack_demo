const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js", //main entry of the app
    vendor: "./src/vendor.js" //vendor entry to store third party js library
  },
  module: {
    rules: [
      {
        test: /\.scss$/i, //regex - looking file ends with scss
        use: [
          "style-loader", //3 inject styles into dom
          "css-loader", //2. turn css into commonjs
          "sass-loader" //1. turn sass into css
        ]
      },
      {
        test: /\.html$/, //load html
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/, //load images
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs" //img folder will be created in dist dir
          }
        }
      }
    ]
  }
};
