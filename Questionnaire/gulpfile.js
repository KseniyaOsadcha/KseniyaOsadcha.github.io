var gulp = require('gulp'),
sass = require('gulp-sass'),
del = require('del'),
concat = require('gulp-concat'),
min = require('gulp-uglify'),
browser = require("browser-sync").create();

gulp.task('clean', function(){
    del.sync("./css")
});
gulp.task('js', function () {
    return gulp.src('./scripts/**/*.js')
        .pipe(concat('build.js'))
        .pipe(min())
        .pipe(gulp.dest('./js'));
});
gulp.task('sass', function() {  
  return gulp.src('scss/**/*.scss') 
    .pipe(sass({
        sourceComments: 'normal'
    }).on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browser.stream());  
})  

gulp.task('watch', function () {
    browser.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("./scripts/**/*.js", ['js']);
    gulp.watch(["*.html", "./js/**/*.js"]).on('change', browser.reload);
});


gulp.task('default', ['clean', 'sass', 'js', 'watch']);  
