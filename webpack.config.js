const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.[hash].css'),
    new HtmlwebpackPlugin({
      template: './index.html',
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src/js'),
      },

      // Base styles
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css!postcss'),
        include: path.join(__dirname, 'src/css'),
        exclude: path.join(__dirname, 'src/css/components'),
      },

      // Component styles
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css' +
            '?modules' +
            '&importLoaders=1' +
            '&localIdentName=[name]__[local]___[hash:base64:5]' +
          '!postcss'
        ),
        include: path.join(__dirname, 'src/css/components'),
      },

      // Vendor styles
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css'),
        exclude: path.join(__dirname, 'src/css'),
      },
    ],
  },
  postcss: () => [
    require('precss'),
    require('postcss-font-magician'),
    require('postcss-short'),
    require('autoprefixer'),
  ],
};
