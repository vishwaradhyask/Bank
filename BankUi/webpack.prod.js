const path = require('path')
const webpackMerge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
/* copy static files */
const CopyWebpackPlugin = require('copy-webpack-plugin')
const commonCfg = require('./webpack.common.js')
module.exports = webpackMerge(commonCfg, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      // { from: './src/imgs', to: 'imgs' },
      // { from: './src/imgs/error.svg', to: 'imgs' },
      // { from: './src/imgs/ok.svg', to: 'imgs' },
      // { from: './src/imgs/static/loading_30.svg', to: 'imgs' },
      // { from: './src/imgs/static_2', to: 'imgs' },
      // { from: './src/imgs/static_2/icon_fill', to: 'imgs' },
      // { from: './src/imgs/slice', to: 'imgs' },
    ]),
  ],
});