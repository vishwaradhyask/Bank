/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge')
const webpackMerge = require('webpack-merge')
const commonCfg = require('./webpack.common.js')

module.exports = webpackMerge(commonCfg, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    // port: 9000,
    proxy: {
      '/': 'https://localhost:11172',
      // '/': 'http://10.19.119.199:9105',
      // '/': 'http://10.19.250.76:9105',
      // '/api': {
      //   target: 'http://10.19.250.129:9104',
      //   pathRewrite: { '^/api': '' },
      // },
    },
    hot: true,
  },
})
