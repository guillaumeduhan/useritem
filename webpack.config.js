const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/src/components/useritem",
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
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.tsx', '.ts', '.js', '.css', 'scss'],
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