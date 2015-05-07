module.exports = {
  entry: './models/note.coffee',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  }
};
