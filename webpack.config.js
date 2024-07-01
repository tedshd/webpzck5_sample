const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  // this.entry: './src/index.js',
  entry: {
    index: './src/pages/home/index.js',
    // util: './src/util.js',
    backup: './src/pages/backup/index.js'
  }, // Order affects loading order
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
    clean: true,
    publicPath: '/assets/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/home/index.html', // HTML 模板文件路径
      filename: '../index.html', // 输出的 HTML 文件相对于 `output.path` 的路径
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/backup/index.html', // HTML 模板文件路径
      filename: '../backup/index.html', // 输出的 HTML 文件相对于 `output.path` 的路径
      chunks: ['backup'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
