const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')


function tarefasCSS(cb){

   return gulp.src('./vendor/**/*.css')
         
      .pipe(concat('libs.css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist'))      
}

function tarefasJS(){
        return gulp.src("./vendor/**/*.js")
                .pipe(concat('libs.js'))
                .pipe(uglify())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest('./dist/js'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS


