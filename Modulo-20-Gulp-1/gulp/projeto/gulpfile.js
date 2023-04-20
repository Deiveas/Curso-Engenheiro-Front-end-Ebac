const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const eslint = require('gulp-eslint');



function tarefasCSS(cb){

    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(){

    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) // libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

gulp.task('lint', function() {
    return gulp.src('./dist/js/libs.min.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });
  
  


exports.styles = tarefasCSS
exports.scripts = tarefasJS







