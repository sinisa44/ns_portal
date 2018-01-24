let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
		server: ['app', 'admin']
	});
})

gulp.task('watch', ['browserSync'], function(){

	watch(["./app/index.html", "./admin/index.html"], function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInsert');
	});

});

gulp.task('cssInsert', ['style'], function(){
	return gulp.src('./app/temp/styles/styles.css')
						 .pipe(browserSync.stream())
});
