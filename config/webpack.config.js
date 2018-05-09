var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './bin/www.ts',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
            configFile: path.resolve(__dirname, "../tslint.json")
        }
      },
      {
        test: /\.tsx?$/, loader: 'ts-loader',
        options: {
            configFile: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    ]
  },
  externals: nodeModules
};
