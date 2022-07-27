const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            miniCss.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: { path: './postcss.config' }
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            },
         ],
      },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ]
  },
    plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};