module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname,
    filename: "/www/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};
