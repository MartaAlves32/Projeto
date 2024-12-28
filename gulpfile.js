const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require ('gulp-image')


function tarefasCSS(){

   return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/jquery-ui/jquery-ui.css'
   ])
         
      .pipe(concat('style.css'))
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

function tarefasImagem(){
        return gulp.src("./src/images/**/*")
                .pipe(image({
                        pngquant: true,
                        optipng: false,
                        zopflipng: true,
                        jpegRecompress: false,
                        mozjpeg: true,
                        gifsicle: true,
                        svgo: true,
                        concurrent: 10,
                        quiet: true
                }))
                .pipe(gulp.dest('./dist/images'))
}
exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem


