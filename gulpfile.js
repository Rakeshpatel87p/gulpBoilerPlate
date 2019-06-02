var 
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require("browser-sync").create(),
	sourcemaps = require('gulp-sourcemaps');

/*

Stock gulptask:

gulp.task('task-name', function(){
	return gulp.src('source-files')
		.pipe(aGulpPlugin())
		.pipe(gulp.dest('destination'))
		cb() //close async function. Otherwise throws err at not having completed
})

*/

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
  })
})

gulp.task('sass', function() {
	return gulp.src('app/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream({match: 'app/css/**/*.css'}))
});

gulp.task('watch', ['browserSync','sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/templates/**/*.html', browserSync.reload); 
  	gulp.watch('app/js/**/*.js', browserSync.reload); 
});