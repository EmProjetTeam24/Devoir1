"use strict";
let path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: "./src/index.ts",

    devServer: {
        //contentBase: './src'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".html"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader!ts-loader"
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },{
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};