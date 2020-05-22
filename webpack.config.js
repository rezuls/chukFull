const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: [
    './src/js/app.js',
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/, 
        require.resolve('./src/index.html')],
        use: {
            loader: 'file-loader',
            query: {
                name: '[name].[ext]'
            },
        },
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/style'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './src/fonts/[name].[ext]',
            outputPath: 'fonts/',
          }
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.(sass|scss)', '.html'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: "./src/favicon/macpaw-favicon.ico",
    }),
    new ExtractTextPlugin({
      filename: './styles/style.css',
      allChunks: true,
    }),
    new CopyPlugin({
      patterns: [
        {from: './src/fonts', to: './fonts'},
        {from: './src/icons', to: './icons'},
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/app.js'
  },
  devServer: {
    contentBase: [path.resolve(__dirname, "build")],
    historyApiFallback: true,
    port: 9000,
  },
};