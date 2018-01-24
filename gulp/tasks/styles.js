let gulp = require('gulp');
let postCss = require('gulp-postcss');
let autoPrefixer = require('autoprefixer');
let cssVars = require('postcss-simple-vars');
let nested = require('postcss-nested');
let cssImport = require('postcss-import');
let mixins = require('postcss-mixins');

	gulp.task('style', function(){
		return gulp.src('./app/assets/styles/styles.css')
				.pipe(postCss([cssImport, mixins, cssVars, nested, autoPrefixer]))
				.on('error', function(errorInfo){
					console.log(errorInfo.toString());
					this.emit('end');
				})
				.pipe(gulp.dest('./app/temp/styles'));
		});
