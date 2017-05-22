'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(['./sass/**/*.scss', './js/**.js'], ['sass', 'scripts']);
});

gulp.task('default', [ 'sass', 'scripts', 'watch']);
