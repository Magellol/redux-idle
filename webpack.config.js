const { resolve } = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  entry: resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'redux-idle.js',
    library: 'ReduxIdle',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: resolve(__dirname, 'tslint.json'),
              emitErrors: true,
              failOnHint: true,
              typeCheck: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   comments: false,
    //   sourceMap: true,
    // }),
  ],

  // @todo
  //  KICK OUT REDUX FROM THE BUNDLE YO
  externals: {}
};

module.exports = config;