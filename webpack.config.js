module.exports = {
  entry: './src/entry.js',
  output: {
    path: './bin',
    filename: 'bundle.js'
  },
  devtool : 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
};