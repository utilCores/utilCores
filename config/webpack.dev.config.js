const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const WebpackHtml = require('html-webpack-plugin');

const BASE_CONFIG = require('./webpack.config');

const applicationConstants = require('./constants/');

const {
  PUBLIC_DIR,
  PATH_TO_INDEX,
} = applicationConstants;

const CONFIG = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PUBLIC_DIR,
    compress:  true,
    hot: true,
    port: 3000,
  },
  mode: "development",
  plugins: [
    ...BASE_CONFIG.plugins,
    ...[
      new webpack.DefinePlugin({
        'process.env': JSON.stringify('development'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackHtml({
        template: PATH_TO_INDEX,
        inject: true,
        publicPath: '',
      }),
    ],
  ],
};

const ELEMENTS = [
  BASE_CONFIG,
  CONFIG,
];

module.exports = WebpackMerge(...ELEMENTS);