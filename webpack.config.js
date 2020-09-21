const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");


const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, './src/public/index.html'),
    filename: path.resolve(__dirname, './dist/index.html'),
})


const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].bundle.css',
    chunkFilename: '[id].css',
})


module.exports = {
    devServer: {
        overlay: true,
        contentBase: "./dist",
        hot: true,
        inline: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true }
    },
    entry: [
        path.resolve(__dirname, 'src') + '/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ],
    },
    plugins: [htmlPlugin, miniCssExtractPlugin],
};
