const path = require('path');
const webpack = require('webpack');

const applicationConstants = require('./constants/');

const {
  ROOT_DIR,

  VERSION,
} = applicationConstants;

const CONFIG = {
  entry: {
    app: path.resolve(ROOT_DIR, 'src/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['tslint-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  output: {
    filename: `main.bundle.${VERSION}.js`,
    path: path.resolve(ROOT_DIR, 'public'),
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': path.resolve(ROOT_DIR, 'src/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify(''),
    }),
    
    // new webpack.optimize.CommonsChunkPlugin({
    //   filename: 'js/[name].bundle.js',
    //   minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    //   name: 'vendor',
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    // }),
  ],
};

module.exports = CONFIG;