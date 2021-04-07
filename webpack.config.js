const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // app entry file & imports all others
    mode: 'development',
    module: { // rules defining the loaders to be used
        rules: [
            {
                test: /\.(js|jsx)$/, // grabs all .js and .jsx files
                exclude: /(node_mudules)/, // ignores node_modules folder
                loader: 'babel-loader', // loader we want to use
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};