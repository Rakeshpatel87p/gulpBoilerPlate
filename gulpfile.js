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

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
  })
})

gulp.task('sass', function(cb) {
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
      		stream: true
    	}))
		//cb() //close async function. Otherwise throws err at not having completed
});

gulp.task('watch', ['browserSync','sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});