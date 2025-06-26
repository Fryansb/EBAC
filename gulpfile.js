const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function copiaHTML() {
    return gulp.src('./source/index.html')
        .pipe(gulp.dest('./dist'));
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function compressImages() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}


exports.default = gulp.parallel(copiaHTML, compilaSass, comprimeJavaScript, compressImages);
exports.html = copiaHTML;
exports.sass = compilaSass;
exports.scripts = comprimeJavaScript;
exports.images = compressImages;