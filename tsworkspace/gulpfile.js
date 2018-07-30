gulp = require('gulp');
rename = require('gulp-rename');

gulp.task('default', function() {
    const env = process.env.NODE_ENV.trim();
    if (env == 'development') {
        gulp.src('./env-setup/.env.dev')
            .pipe(rename('.env'))
            .pipe(gulp.dest('./'));
    } else if (env == 'production') {
        gulp.src('./env-setup/.env.prod')
            .pipe(rename('.env'))
            .pipe(gulp.dest('./'));
    } else if (env == 'testing') {
        gulp.src('./env-setup/.env.test')
            .pipe(rename('.env'))
            .pipe(gulp.dest('./'));
    }
});