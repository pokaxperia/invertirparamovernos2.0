var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var useref = require('gulp-useref');
var ngAnnotate = require('gulp-ng-annotate');

/*** To Dev ***/

gulp.task('inject', function(){
	return gulp.src('./app/index.html')
		.pipe(wiredep({
			bowerJson: require('./bower.json'),
			directory: 'bower_components',
			ignorePath: '../../',
			exclude: []
		}))
		.pipe($.inject(gulp.src([
			'./app/geojson/zm.js',
			], {read: false}),{ignorePath: '../../', relative: true, starttag: '<!-- inject:own:geojson -->'}))
		.pipe($.inject(gulp.src([
			'./app/css/styles.css'
		], {read: false}),{ignorePath: '../../', relative: true, starttag: '<!-- inject:own:css -->'}))
		.pipe($.inject(gulp.src([
			'./app/components/**/*.module.js',
			'./app/components/**/*.js'
		]), {ignorePath: '../../', relative: true}))
		.pipe(gulp.dest('./app/'));
});

gulp.task('js', function(){
	log('Analizyng components...');
	gulp.src(['./app/components/**/*.js'])
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('sass', ['cleaning-styles'], function () {
	log('Compiling sass to css');
	return gulp.src('./app/sass/config.scss')
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.sass({outputStyle: 'compressed'}))
		.pipe($.concat('styles.css'))
		.pipe(gulp.dest('./app/css/'));
});

gulp.task('template', ['clean-templatecache'], function(){
	log('Angularjs template files!');
	var options = {
		module: 'ipm',
		root: './components/'
	};
	return gulp.src('./app/components/**/*.html')
		.pipe($.minifyHtml({empty: true}))
		.pipe($.angularTemplatecache(
			'templates.js',
			options
		))
		.pipe(gulp.dest('./tmp'));
});

gulp.task('html', ['cleaning-components'], function() {
	log('Copying html files');
	return gulp.src('./app/components/**/*.html')
		.pipe(gulp.dest('public/components/'));
});

gulp.task('images', ['cleaning-images'], function() {
	log('Copying images');
	return gulp.src('./app/images/**/*.{jpg,jpeg,png}')
		.pipe($.imagemin({optimizationLevel: 4}))
		.pipe(gulp.dest('public/images/'));
});

gulp.task('fonts', function() {
	log('Copying iconfonts');
	return gulp.src('./app/fonts/*.*')
		.pipe(gulp.dest('public/fonts/'));
});

/* Cleaners */
gulp.task('cleaning-components', function(){
	clean('public/components/**/**/*.html');
});
gulp.task('clean-templatecache', function(){
	clean('./tmp');
});
gulp.task('cleaning-styles', function(){
	var files = './app/css/*.css';
	clean(files);
});

gulp.task('cleaning-images', function(){
	clean('public/images/**/*.*');
});


/* Dev Server */
gulp.task('dev-server', function(){
	log('Developer server running...');

	browserSync.init({
		files: [
			"./app/index.html",
			"./app/components/**/*.*",
			"./app/components/**/**/*.scss",
			"./app/sass/**/*.scss",
			"./app/sass/config.scss"
		],
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		},
		logFileChanges: true,
		logPrefix: "IPM Project",
		notify: true,
		port: 2016,
		reloadDelay: 1500,
		server: {
			baseDir: './app',
			routes: {
				"/bower_components": "bower_components",
				"./app": "app"
			}
		}
	});
});

/* Watch files */
gulp.task('watch', ['sass'], function(){
	log('Watching files!');
	gulp.watch('app/components/**/*.js', ['js']);
	gulp.watch('jslibs/**/*.js', ['js']);
	gulp.watch('app/components/**/**/*.scss', ['sass']);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/sass/config.scss', ['sass']);
});


gulp.task('dev',['dev-server', 'watch']);
gulp.task('prod', ['prod-server']);

/* To Production */

/* Prod Server */
gulp.task('prod', function(){
	log('Production server running...');

	browserSync.init({
		ghostMode: {
			clicks: false,
			forms: true,
			scroll: false
		},
		logFileChanges: true,
		logPrefix: "IPM Project",
		notify: true,
		port: 2016,
		reloadDelay: 1500,
		server: {
			baseDir: './public',
			routes: {
				"./public": "public"
			}
		}
	});
});

gulp.task('join', ['template', 'html', 'images', 'fonts'], function(){
	log('Joining all js/css files');
	var cssFilter = $.filter('**/*.css', {restore: true});
	var jsLibFilter = $.filter('**/lib.js', {restore: true});
	var jsAppFilter = $.filter('**/app.js', {restore: true});

	return gulp.src('./app/index.html')
		.pipe($.inject(gulp.src(
			'../tmp/templates.js',{read: false}
		),{starttag: '<!-- inject:templates:js -->'}))
		.pipe(cssFilter)
		.pipe($.csso())
		.pipe(cssFilter.restore)
		.pipe(jsLibFilter)
		.pipe(jsLibFilter.restore)
		.pipe(jsAppFilter)
		.pipe(jsAppFilter.restore)
		.pipe($.useref())
		.pipe(gulp.dest('public'));
});

gulp.task('con', ['app', 'lib', 'css']);

gulp.task('app', function () {
  return gulp.src('public/js/app.js')
    .pipe(ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('lib', function () {
  return gulp.src('public/js/lib.js')
    .pipe($.uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('css', function () {
	log('Compiling css to public');
	return gulp.src('./app/css/*.css')
		.pipe(gulp.dest('./public/css/'));
});


function clean(path){
	log('Cleaning: '+ $.util.colors.blue(path));
	del(path)
}

function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.green(msg[item]));
			}
		}
	}
	else {
		$.util.log($.util.colors.green(msg));
	}
}
