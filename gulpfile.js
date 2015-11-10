var gulp = require('gulp'),
		wiredep = require('wiredep').stream,
		concat = require('gulp-concat'),
		server = require('gulp-server-livereload'),
		sourcemaps = require('gulp-sourcemaps');

gulp.task('bower', function(){
	 gulp.src('./app/index.html')
    .pipe(wiredep({
      directory:"app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

// gulp.task('concatJs', function() {
//   return gulp.src('./app/js/*.js')
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('./app/script'));
// });

gulp.task('concatJs', function() {
  return gulp.src('./app/js/**/*.js')
  	.pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/script'));
});

gulp.task('webserver', function(){
	gulp.src('app')
	.pipe(server({
		livereload:true,
		directoryListing:false,
		defaultFile:'index.html',
		open:true
	}));
});

gulp.task('watch', function(){
	gulp.watch('bower.json', ['bower']),
	gulp.watch('./app/js/**/*.js', ['concatJs']);
	
});

gulp.task('default',['bower','watch','concatJs']);



