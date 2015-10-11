'use strict';

let path = require('path');
let gulp = require('gulp');
let gutil = require('gulp-util');
let webpack = require('webpack');
let conf = require('./webpack.config');
let build = require('./config');
let del = require('del');
let express = require('express');

gulp.task('prepare', function(callback) {
   del('target').then(function() {
       gulp.src(path.join(build.src, 'index.html'))
           .pipe(gulp.dest(build.target));

       callback();
   });
});

gulp.task('build', function(callback) {
    webpack(conf, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err)
        }

        gutil.log("[webpack]", stats.toString({
            colors: true
        }));

        callback();
    });
});

gulp.task('debug', function() {
    let devConf = Object.create(conf);

    devConf.plugins = devConf.plugins || [];
    devConf.plugins.push(new webpack.HotModuleReplacementPlugin());

    devConf.entry = [devConf.entry] || [];
    devConf.entry.push('webpack-hot-middleware/client');

    devConf.debug = true;
    devConf.devtool = 'eval-source-map';

    let compiler = webpack(devConf);
    let app = express();

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: devConf.output.publicPath,
        colors: true
    }));

    app.use(require('webpack-hot-middleware')(compiler));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, build.src, 'index.html'));
    });

    app.listen(3000, 'localhost', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Listening at http://localhost:3000');
        }
    });
})
