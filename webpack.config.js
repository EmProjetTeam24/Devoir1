"use strict";
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');


module.exports = {
    resolve: {extensions: [".js", ".ts", ".html", ".css"]},
    devtool: 'inline-source-map',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        libraryTarget: "umd",
    },
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
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        })
    ]
};