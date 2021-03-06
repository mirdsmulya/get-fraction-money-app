import webpack from 'webpack';
import path from 'path';
import webpackBundleAnalyzer from 'webpack-bundle-analyzer';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: "production",
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + 'build'  , // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({analyzerMode: "static"}),
    new htmlWebpackPlugin({
      template: "src/index.html".
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      //{test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.jsx?$/,loader: 'babel-loader',exclude: /node_modules/},
      {test: /(\.css)$/, loader: "style-loader!css-loader"},
      //{test: /(\.css)$/, loader: ['style-loader', 'css-loader']},
      {test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,loader: 'url-loader?limit=100000'}


    ]
  }
};
