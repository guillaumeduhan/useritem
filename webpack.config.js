const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/src/components/UserItem.tsx",
  plugins: [],
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.svg$/, loader: 'svg-inline-loader' }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  externals: {
    react: "react"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/src'),
    },
    compress: true,
    port: 9000,
  },
};