var 
	gulp = require('gulp'),
	sass = require('gulp-sass');

/*

Stock gulptask:

gulp.task('task-name', function(){
	return gulp.src('source-files')
		.pipe(aGulpPlugin())
		.pipe(gulp.dest('destination'))
		cb() //close async function. Otherwise throws err at not having completed
})

*/

gulp.task('hello', function(cb) {
	console.log('Hello Rocky. Happy Sunday. You got this!');
	cb();
})

gulp.task('sass', function() {
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		cb() //close async function. Otherwise throws err at not having completed
})