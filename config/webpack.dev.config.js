const path = require('path');

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
    port: 3000,
  },
  mode: "development",
  plugins: [
    ...BASE_CONFIG.plugins,
    ...[
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