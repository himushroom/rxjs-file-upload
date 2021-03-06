const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: [
    './test/test.page'
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [
      '.ts',
      '.js'
    ],
    modules: [
      './node_modules'
    ]
  },

  module: {
    rules: [{
      test: /\.ts?$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      exclude: [
        /node_modules/
      ],
      query: {
        emitErrors: true,
        formatter: 'stylish'
      }
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        configFileName: 'tsconfig.test.json'
      }
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader'
      ]
    }]
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'errors-only'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './test/test.html'
    })
  ]

}
