const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // compiles JSX(ES6)
        },
      },

      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'resolve-url-loader',
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,

              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [path.resolve(__dirname, './node_modules')],
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: '../',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
