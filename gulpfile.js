const gulp = require('gulp');
const dSass = require('sass');
const gulpSass = require('gulp-sass');
const uglify = require('gulp-uglify');
const gulpImports = require('gulp-imports');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

const sass = gulpSass(dSass);

gulp.task('sass', () => {
    return gulp
        .src('./scss/lionstyle.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', () => {
    return gulp
        .src('./js/lionstyle.js')
        .pipe(gulpImports({hideConsole: true}))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('pug', () => {
    return gulp
        .src('./pug/**/*.pug')
        .pipe(concat('lionstyle.pug'))
        .pipe(gulp.dest('./dist'));
});

gulp.task(
    'build',
    gulp.series(
        'sass',
        'js',
        'pug',
    ),
);
