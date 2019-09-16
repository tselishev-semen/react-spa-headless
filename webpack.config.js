const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: "./app.js"
  },
  devtool: "inline-source-map",
  resolve: {
    modules: [".", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "./backend-mocks",
        to: "./api"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "blogs.html",
      template: "./index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./index.html"
    })
  ]
};
