'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'target'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel?stage=1'
            }, {
                test: /\.css$/,
                loader: 'style!css-loader?modules!cssnext-loader',
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                loader: 'style!css-loader!cssnext-loader',
                exclude: /src/
            }, {
                test: /\.(ttf|eot|svg|png)$/,
                loader: 'file-loader'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.json'],
        modulesDirectories: ['node_modules']
    }
};
