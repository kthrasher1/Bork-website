const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    },

    devServer: {
        static: './build',
        open: true
    },

    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img/',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ]
};