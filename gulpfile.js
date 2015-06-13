var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var jade = require('gulp-jade');

const SASS_FILES = './dist/sass/**/*.scss';
const JADE_FILES = './dist/jade/**/*.jade';

gulp.task('sass', function() {
  return gulp.src(SASS_FILES)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 3 versions', 'ie 8', 'ie 9'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  return gulp.src(JADE_FILES)
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('jade-watch', ['jade'], browserSync.reload);
gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('serve', ['sass', 'jade'], function() {
  browserSync.init({
    server: './public'
  });

  gulp.watch(SASS_FILES, ['sass-watch']);
  gulp.watch(JADE_FILES, ['jade-watch']);
});
