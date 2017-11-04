'use strict';

const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

const
    sassSrcFiles = 'src/**/*.scss',
    buildFolder = 'src',
    sassOptions = {
      errLogToConsole: true,
      outputStyle: 'compressed'
    },
    autoprefixerOptions = {
      browsers: ['last 2 versions']
    };

gulp.task('sass', function () {
  return gulp
      .src(sassSrcFiles)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(buildFolder))
});

gulp.task('watch', function (done) {
  gulp.watch(sassSrcFiles, gulp.parallel('sass'));
  done();
});

gulp.task('default', function () {
  gulp.watch(sassSrcFiles, ['sass']);
});
