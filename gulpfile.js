var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

// css
gulp.task('css', function () {
    /* gulp.src('./public/js/*.js')
         .pipe(concat('alljs.js'))
         .pipe(gulp.dest('./public/js/Alljs/'));*/
    gulp.src('./public/css/*.css')
        .pipe(prefix('last 15 versions'))
        .pipe(minifyCSS())
        .pipe(rename('css.min.css'))
        .pipe(connect.reload())
        //.pipe(notify('Done!!!'))
        .pipe(gulp.dest('./public/css/'));
});

// html
gulp.task('html', function () {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});


// watch
gulp.task('watch', function () {
    gulp.watch('./public/css/*.css', ['css'])
    gulp.watch('./public/*.html', ['html'])
});
// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);