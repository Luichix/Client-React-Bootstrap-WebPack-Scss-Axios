const HtmlWebpackPlugin = require('html-webpack-plugin')

const imageRules = {
  test: /\.(svg|png|jpg|jpeg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'assets',
        useRelativePath: true
      }
    }
  ]

}

const sassRules = {
  test: /\.scss$/,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Translate Url
    'resolve-url-loader',
    // Translates SCSS into CSS
    'sass-loader'
  ]
}

const mapRules = {
  test: /\.js$/,
  enforce: 'pre',
  use: ['source-map-loader']
}

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-runtime']
    }
  }
}

module.exports = {
  output: {
    filename: 'app.[contentHash].js'
  },
  module: {
    rules: [javascriptRules, sassRules, imageRules, mapRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack paso a paso',
      template: 'src/index.html'
    })
  ]
}
