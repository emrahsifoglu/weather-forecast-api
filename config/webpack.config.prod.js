const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

// [HERE] a helper function for alias definitions
function asPath(srcSubDir) {
    return path.join(__dirname, 'src', srcSubDir);
}

module.exports = {
  entry: './bin/www.ts',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // [HERE] ./src is for getting rid of endless ../../.. in imports
    // see also tsconfig.json
    modules: [path.resolve('./src'), path.resolve('node_modules')],

    // [HERE] some aliases for imports,
    // tsconfig.json also needs to be maintained
    alias: {
        '$controllers': asPath('services'),
        '$middlewares': asPath('middlewares'),
        '$modules': asPath('modules'),
        '$routes': asPath('routes'),
        '$services': asPath('services'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
            configFile: path.resolve(__dirname, '../tslint.json')
        }
      },
      {
        test: /\.tsx?$/, loader: 'ts-loader',
        options: {
            configFile: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    ]
  },
  externals: nodeModules
};
