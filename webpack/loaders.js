const plugins = require('./plugins');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env']
    }
  }
};

// const CssLoader = {
//   test: /\.css$/,
//   use: [
//     'style-loader',
//     // MiniCssExtractPlugin.loader,
//     'css-loader',
//     {
//       loader: "postcss-loader",
//       options: {
//         config: {
//           path: __dirname + "/postcss.config.js"
//         }
//       }
//     }
//   ]
// };

module.exports = {
  // CssLoader,
  JSLoader
};