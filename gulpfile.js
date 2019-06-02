var 
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require("browser-sync").create();

/*

Stock gulptask:

gulp.task('task-name', function(){
	return gulp.src('source-files')
		.pipe(aGulpPlugin())
		.pipe(gulp.dest('destination'))
		cb() //close async function. Otherwise throws err at not having completed
})

*/

gulp.task('sass', function(cb) {
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		cb() //close async function. Otherwise throws err at not having completed
});

gulp.task('watch', ['sass'], function(){
	gulp.watch('app/scss/**/.scss', ['sass']);
});