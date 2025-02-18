const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js', 

  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },

  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },

      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
  },

  mode: 'development',
};