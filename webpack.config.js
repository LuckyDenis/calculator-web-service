const HtmlWebPackPlugin = require("html-webpack-plugin")


const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/html/index.html',
    filename: './index.html',
})

module.exports = {
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /.scss$/,
                use: [
                    'style-loader', 'css-loader'
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
    plugins: [htmlPlugin],
};
