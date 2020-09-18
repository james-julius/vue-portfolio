module.exports = {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue|scss)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ]
    }
  }