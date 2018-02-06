"use strict";
let path = require('path');

module.exports = {
    resolve: {
        extensions: [".js", ".ts", ".html", ".css"],
    },
    devtool:
        'inline-source-map',
    entry:
        "./src/index.ts",


    output:
        {
            path: path.resolve(__dirname, './dist'),
            filename:
                "bundle.js"
        }
    ,

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader!ts-loader"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ]
    }
}
;