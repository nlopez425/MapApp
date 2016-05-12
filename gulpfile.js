var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var browserSync = require('browser-sync').create();


gulp.task('default',function(){
	gulp.src('spec/*.spec.js')
	.pipe(jasmine());
});

gulp.task('browser-sync',function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
});