const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ExtractTextPlugin = new MiniCssExtractPlugin({
  filename: "style.css",
});

module.exports = {
  ExtractTextPlugin
};