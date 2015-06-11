var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var inject = require('gulp-inject');

var srcPaths = {
  sass: [
    './app/**/*.scss',
    './app/**/**/*.scss'
  ],
  js: [
    './app/**/*.js'
  ],
  components: {
    js: [
      '!./app/components/**/*_test.js',
      './app/components/**/*.js',
      '!./app/shared/**/*_test.js',
      './app/shared/**/*.js'
    ],
    css: [
      './app/components/**/*.css',
      './app/shared/**/*.css'
    ]
  }
};

var destPath = './app/';

gulp.task('sass', function(done) {
  gulp.src(srcPaths.sass)
    .pipe(sass())
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(destPath))
    .on('error', gutil.log)
    .on('end', done);
});

//gulp.task('scripts',function(done){
//  gulp.src(srcPaths.js)
//    .pipe(uglify())
//    .pipe(rename({suffix: '.min'}))
//    .pipe(gulp.dest(destPath))
//    .on('error', gutil.log)
//    .on('end', done);
//});

gulp.task('index', function(){
  return gulp.src('./app/index.html')
    .pipe(inject(gulp.src(srcPaths.components.js, {read: false}), {relative: true}))
    .pipe(inject(gulp.src(srcPaths.components.css, {read: false}), {relative: true}))
  .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
  gulp.watch(srcPaths.sass, ['sass']);
  //gulp.watch(srcPaths.js, ['scripts']);
  gulp.watch([srcPaths.components.js, srcPaths.components.css], ['index']);
});

gulp.task('default', ['sass', 'index', 'watch']);