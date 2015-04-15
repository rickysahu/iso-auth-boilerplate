var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var browserSync = require('browser-sync');
var debug = require('debug');
var webpackHotConfig = require('./webpack.hot-config');
var webpackConfig = require('./webpack.config');

var $ = require('gulp-load-plugins')(),

debug = debug('gulp:feedback');

const paths = {
  sharedJS: 'shared/**/*',
  baseJS: './*.js',
  js: 'simple/**/*',
  less: 'src/less/**/*'
};

const webPackAddress = 'http://localhost:3002';

gulp.task('server', function() {
  var options = {
    script: 'server.js',
    ext: 'js,jsx',
    env: {}
  };
  if ($.util.env.clientOnly) {
    options.ignore = [paths.sharedJS, 'node_modules', '!shared/routes.js'];
    options.env.REACT_CLIENT_RENDER = true;
    options.env.REACT_SERVER_RENDER = false;
  } else if ($.util.env.serverOnly) {
    options.ignore = ['node_modules'];
    options.env.REACT_SERVER_RENDER = true;
    options.env.REACT_CLIENT_RENDER = false;
  } else if ($.util.env.iso) {
    options.ignore = ['node_modules'];
    options.env.REACT_SERVER_RENDER = true;
    options.env.REACT_CLIENT_RENDER = true;
  }

  // options.env.DEBUG = config.serverDebug;

  $.nodemon(options);
});

gulp.task('eslint', function() {
  return gulp.src([paths.sharedJS, paths.baseJS])
    .pipe($.eslint({
      globals: {
        document: true,
        console: true,
        debug: true,
        process: true,
        __dirname: true,
        setTimeout: true,
        window: true
      }
    }))
    .on('error', function(error) {
      debug(error);
    })
    .pipe($.notify({
      message: function(file) {
        if (!file || !file.eslint || file.eslint.success || !file.eslint.messages.length) {
          // Don't show something if success
          return false;
        }
        var errors = file.eslint.messages.map(function(data) {
          if (data) {
            return '(' + data.line + ':' + data.column + ') ' + data.message;
          }
        }).join('\n');
        var endPath = file.eslint.filePath.replace(__dirname, '');
        return endPath + ' (' + file.eslint.messages.length + ' errors)\n' + errors;
      },
      title: 'ESLint'
    })
  );
});


gulp.task('devserver', function(callback) {
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackHotConfig), {
    publicPath: '/dist/',
    hot: true,
    noInfo: true,
    stats: {
      colors: true
    }
  })
  .listen(3002, 'localhost', function(err) {
  if (err) {
    $.notify(err);
    throw new $.util.PluginError('webpack-dev-server', err);

  }
  $.util.log('[webpack-dev-server]', webPackAddress);
  // keep the server alive or continue?
  callback();
  });
});

gulp.task('browser-sync', function() {
  setTimeout(function() {
    debug('Starting browserSync server, proxying 3030 to 3000.');
    browserSync({
      proxy: 'http://localhost:3030',
      port: 3000
    });
  }, 4000);
});

gulp.task('browser-reload', function() {
  setTimeout(function() {
    debug('Reloading open browsers.');
    browserSync.reload();
  }, 4000);

});

// Compile LESS
gulp.task('less', function() {
  return gulp.src('src/less/main.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .on('error', function (err) {
      debug(err);
    })
    .pipe($.sourcemaps.write({
      includeContent: false
    }))
    .pipe($.sourcemaps.init({
      loadMaps: true
    }))
    .pipe($.autoprefixer())
    .on('error', function (err) {
      debug(err);
    })
    .pipe(gulp.dest('dist'))
    .pipe($.filter('**/*.css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('dist')); // Copy to static dir
});

gulp.task('lessLint', function() {
  debug('Less Linting');
  return gulp.src([
    './src/less/**/*.less',
    '!./src/less/lib/**/*',
    '!./bower_components/**/*'])
    .pipe($.recess())
    .on('error', debug)
    .pipe($.notify({
      message: function(file) {
        if (!file || !file.recess || file.recess.success) {

          // Don't show something if success
          return false;
        }
        return file.relative + ' (' + file.recess.results.length + ' errors)\n';
      },
      title: 'LESS Lint'
    }))
    .pipe($.recess.reporter())
    .on('error', debug);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.less', ['less']);
  gulp.watch('index.js', ['browser-reload']);
  // gulp.watch(paths.less, ['less']);
  gulp.watch([paths.sharedJS, paths.baseJS], ['eslint']);
});

gulp.task('clean', function() {
  return gulp.src('./dist/**/*', {read: false})
    .pipe($.rimraf());
});

gulp.task('bundleJS', function() {
  return gulp.src('./client.js')
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('dev', ['clean', 'watch', 'devserver', 'browser-sync', 'less', 'server']);

gulp.task('build', ['clean', 'bundleJS']);

gulp.task('server-only', ['clean', 'watch', 'browser-sync', 'less', 'server']);
