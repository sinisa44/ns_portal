let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();
let connect = require('gulp-connect-php7');

gulp.task('connect-sync', function() {
  connect.server({}, function (){
    browserSync.init({
			 proxy: '127.0.0.1/NS_blog/app'
	  });
	});
});

gulp.task('watch', ['connect-sync'], function(){

	watch('./app/**/*.php').on('change', function () {
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


/*admin watch */

gulp.task('adminWatch',function(){
	watch('./admin/app/assets/styles/**/*.css',function(){
		gulp.start('adminInsert');
	});
});

gulp.task('adminInsert',['adminStyle'],function(){
	return gulp.src('./admin/temp/styles/styles.css')
		.pipe(browserSync.stream());
})
