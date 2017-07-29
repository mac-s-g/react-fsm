const path = require('path');
const webpack = require('webpack');
const wds_port = 3001;

const PATHS = {
    src: path.join(__dirname, 'src'),
    js: path.join(__dirname, 'src/js'),
    build: path.join(__dirname, 'dist'),
    devServer: path.join(__dirname, 'dev-server')
};

let entrypoint = PATHS.devServer + '/dev-server.js';
let includes = [PATHS.js, PATHS.devServer];
let devtool = 'eval-source-map';

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'production') {
  //default to production environment
  process.env.NODE_ENV = 'production';
  entrypoint = PATHS.js + '/index.js';
  includes = [PATHS.js];
  devtool = false;
}

const config = {
  entry: [entrypoint],
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devServer: {
    host: '0.0.0.0',
    port: wds_port,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: PATHS.build
  },
  output: {
    path: PATHS.build,
    filename: 'main.js',
    library: 'reactJsonView',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: includes
      },
    ]
  }
};

module.exports = config;
