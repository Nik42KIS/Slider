const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html'
      }),
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
  };
};
