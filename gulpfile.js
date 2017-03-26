var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
    var tsProject = ts.createProject('./src/tsconfig.json');
    return gulp.src('./src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['typescript']);

gulp.task('watch', function () {
    gulp.watch('./src/**/*.ts', ['build']);
});

gulp.task('default', ['watch']);