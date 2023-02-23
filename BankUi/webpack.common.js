const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// /* copy static files */
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, './src'),
}

module.exports = {
  entry: {
    myApp: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: paths.DIST,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: './src/images', to: 'imgs' },
    ]),
    new CopyWebpackPlugin([
      { from: './src/qcss_static/fonts', to: 'fonts' },
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        // exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/react-intl'),
          path.join(__dirname, 'node_modules/intl-messageformat'),
          path.join(__dirname, 'node_modules/intl-messageformat-parser'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    corejs: '3',
                    targets: '> 0.25%, not dead',
                  },
                ],
                // '@babel/preset-env',
              ],
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader?url=false', 'sass-loader?url=false'],
      },
      // images
      {
        // test: /\.(png|jpg|gif|svg)$/i,
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: [/imgs\/.*\.svg$/, /\.svg$/],
        // include: [__dirname + '/src/components/', __dirname + '/src/imgs/static/'],
        include: [`${paths.SRC}/imgs/static/`],
        use: [
          {
            loader: 'url-loader',
            // loader: 'file-loader',
          },
        ],
      },
      // fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      // inline svg
      {
        test: /\.svg$/,
        exclude: [/node_modules/, /imgs\/static\//],
        use: [
          {
            loader: 'svg-react-loader',
          },
        ],
      },
    ],
  },
}
