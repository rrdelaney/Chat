'use strict';

let path = require('path');
let webpack = require('webpack');
let config = require('./config');

module.exports = {
    entry: path.join(__dirname, config.src, config.js.src),
    output: {
        path: path.join(__dirname, config.target),
        filename: config.js.target,
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
        extensions: ['', '.jsx', '.js', '.json', '.ios.jsx', '.web.jsx', '.and,jsx'],
        modulesDirectories: ['node_modules']
    }
};
