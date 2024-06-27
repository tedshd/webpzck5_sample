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
    index: './src/index.js',
    util: './src/util.js',
    demo: './src/pages/demo/demo.js',
    home: './src/pages/home/home.js',
    sample: './src/pages/sample/sample.js',
  }, // Order affects loading order
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/home/index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      filename: 'demo.html',
      template: './src/pages/demo/index.html',
      chunks: ['demo']
    }),
    new HtmlWebpackPlugin({
      filename: 'sample',
      template: './src/pages/sample/index.html',
      chunks: ['sample']
    }),
  ],
  module: {
    rules: [
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
