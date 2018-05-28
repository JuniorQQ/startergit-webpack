const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};