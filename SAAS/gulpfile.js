var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('convertscss', function() {
   return gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//gulp.task('default', gulp.parallel('convertscss'));
gulp.task('default',function(){
    return gulp.watch('styles/*.scss', gulp.series('convertscss'));
})

// var gulp = require('gulp'),
//   cssnano = require('gulp-cssnano'),
//   rename = require('gulp-rename'),
//   sass = require('gulp-sass'),
//   scsslint = require('gulp-scss-lint');
// var paths = {
//   js: contexts.assets + '/js',
//   sass: 'app/Resources/assets/scss',
//   buildCss: 'web/css',
//   buildJs: 'web/js'
// };
// var watch = {
//   js: [
//     paths.js + '/**/*.js'
//   ],
//   sass: [
//     paths.sass + '/**/*.scss'
//   ]
// };
// gulp.task('sass', function () {
//   return gulp.src(paths.sass  + '/app.scss')
//       .pipe(sass())
//       .pipe(cssnano({
//         keepSpecialComments: 1,
//         rebase: false,
//         zindex: false
//       }))
//       .pipe(rename({suffix: '.min'}))
//       .pipe(gulp.dest(paths.buildCss));
// });
// gulp.task('scss-lint', function () {
//   return gulp.src(paths.sass  + '/**/*.scss')
//       .pipe(scsslint());
// gulp.task('watch', function () {
//   gulp.watch(watch.sass, { interval: 500 }, ['sass']);
// });
