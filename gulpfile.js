var gulp = require('gulp'),
watch = require('gulp-watch');

var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('watch', function(cb) {
    gulp.watch(['scss/*.scss'], ['styles']);
})

gulp.task('styles', function(cb) {
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['> 1%', 'IE >= 8', 'last 2 versions'] }) ]))
    .pipe(gulp.dest('assets/css'));
});

