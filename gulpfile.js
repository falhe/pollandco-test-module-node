"use strict";

var config = require('./config.json');

var plugins = require('gulp-load-plugins')({
	pattern: '*',
	scope: ['devDependencies'],
	camelize: true,
	replaceString: /^gulp(-|\.)/,
	rename: {
		'main-bower-files': 'bowerParse',
		'vinyl-source-stream': 'source',
		'vinyl-buffer': 'buffer'
	}
});

var ENV = 'dev';
var optionsUglifyDev = {
	output: { // http://lisperator.net/uglifyjs/codegen
		beautify: true,
		comments: true
	},
	compress: false,
	preserveComments: true,
	mangle: false,
	outSourceMap: true
};

var optionsUglifyProd = {
	output: {
		beautify: false,
		comments: false
	},
	compress: {
		drop_console: true,
		warnings: false
	},
	preserveComments: false,
	mangle: true,
	outSourceMap: false
};

//Clean destination folder
plugins.gulp.task('clean', function() {
	plugins.del([
		config.public_path + '/**'
	], {
		force: true
	});
});

//JSHint
plugins.gulp.task('jshint', function() {
	return plugins.gulp.src(config.js_path + '/**/*.js')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

// plugins.gulp.task('compile:hbs', function() {
// 	return plugins.gulp.src(config.js_path + '/**/*.hbs')
// 		.pipe(plugins.handlebars())
// 		.pipe(plugins.defineModule('amd'))
// 		.pipe(plugins.gulp.dest(config.precompiled_path));
// });

//compile partials
// plugins.gulp.task('compile:partials', function(){
// 	plugins.gulp.src([ config.js_path + '/**/_*.hbs' ])
// 		.pipe(plugins.handlebars())
// 		.pipe(plugins.wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
// 	      imports: {
// 	        processPartialName: function(fileName) {
// 	        	console.log('fileName ',fileName);
// 	          // Strip the extension and the underscore 
// 	          // Escape the output with JSON.stringify 
// 	          return JSON.stringify(path.basename(fileName, '.js').substr(1));
// 	        }
// 	      }
// 	    }))
// 	    .pipe(plugins.concat('partials-test.js'))
// 	    .pipe(plugins.gulp.dest(config.precompiled_path + '/partials'));
// 	    console.log('dest ', config.precompiled_path + '/partials');

// });


plugins.gulp.task('scripts', function() {
	console.log('scripts !!!!!!!!!');

	var options;
	options = {
		debug: true,
		paths: ['./node_modules']
	};

	plugins.hbsfy.configure({ extensions: ['.hbs'] });

	plugins.browserify(config.js_path + '/main.js', options)
		.transform(plugins.hbsfy)
		.bundle()
		.pipe(plugins.source('app.js'))
		.pipe(plugins.buffer())
		.pipe(plugins.sourcemaps.init({ loadMaps: true }))
		.pipe(plugins.sourcemaps.write('./'))
		.pipe(plugins.gulp.dest(config.public_path + '/' + config.js_dest))

	// set up the browserify instance on a task basis
  // var b = plugins.browserify({
  //   entries: config.js_path + '/main.js',
  //   debug: true
  // });

  // return b.bundle()
  //   .pipe(plugins.source('app.js'))
  //   .pipe(plugins.buffer())
  //   .pipe(plugins.sourcemaps.init({loadMaps: true}))
  //       // Add transformation tasks to the pipeline here.
  //       //.pipe(uglify())
  //       .on('error', plugins.util.log)
  //   .pipe(plugins.sourcemaps.write('./'))
  //   .pipe(plugins.gulp.dest( config.public_path + '/' + config.js_dest ));

	plugins.gulp.src([
			config.js_path + '/vendor/jquery-2.1.4.min.js',
			config.js_path + '/vendor/bootstrap.min.js'
			//config.js_path + '/vendor/moment-2.10.6-min.js'
		])
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.concat('vendor.js'))
		.pipe(plugins.uglify(plugins.if(ENV == 'dev', optionsUglifyDev, optionsUglifyProd))).on('error', errorHandler)
		.pipe(plugins.if(ENV == 'dev', plugins.sourcemaps.write('./')))
		.pipe(plugins.gulp.dest(config.public_path + '/' + config.js_dest))
		.pipe(plugins.if(ENV == 'dev', plugins.browserSync.stream()));

})

//Task Styles:dev
plugins.gulp.task('styles:dev', function() {
	return plugins.gulp.src(config.scss_path + '/**/*.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init()) // Sourcemap init
		.pipe(plugins.sass({
			outputStyle: 'expanded'
		})).on('error', plugins.sass.logError)
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sourcemaps.write('./'))
		.pipe(plugins.gulp.dest(config.public_path + '/' + config.css_dest))
		.pipe(plugins.browserSync.stream());
});

//Task Styles:prod
plugins.gulp.task('styles:prod', function() {
	return plugins.gulp.src(config.scss_path + '/global.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.sass({
			outputStyle: 'compressed'
		}))
		.pipe(plugins.gulp.dest(config.public_path + config.css_dest)); // Save CSS result in destination folder
});

// Task Copy img fonts
plugins.gulp.task('copyassets', function(){

	plugins.gulp.src([
		config.img_path + '/**',
		'!' + config.img_path + '/{svg,svg/**}'
		])
	.pipe(plugins.gulp.dest(config.public_path + config.img_dest))

	plugins.gulp.src([
		config.fonts_path + '/**'
		])
	.pipe(plugins.gulp.dest(config.public_path + config.fonts_dest))

});

//Task Compile:dev
plugins.gulp.task('compile:dev', function() {

	// if (config.browserSync.status) {
	// 	plugins.browserSync({
	// 		//proxy: "pollandco.com:8888"
	// 		proxy: config.browserSync.proxy
	// 	});
	// }

	plugins.runSequence(
		'clean',
		'gitinfo',
		['styles:dev','jshint', 'scripts', 'copyassets'],
		function() {
			plugins.util.log('Ready for dev!');
			plugins.gulp.watch(config.scss_path + '/**/*.scss', ['styles:dev']);
			plugins.gulp.watch(config.js_path + '/**/*.hbs', ['jshint', 'scripts']);
			plugins.gulp.watch(config.js_path + '/**/*.js', ['jshint', 'scripts']);

			// if( config.browserSync.status)
			// 	plugins.gulp.watch(config.browserSync.mainFilesToWatch).on('change', plugins.browserSync.reload);
		}
	)

})

// Task Compile:prod
plugins.gulp.task('compile:prod', function() {
	plugins.runSequence(
		'clean',
		'gitinfo',
		['styles:prod', 'jshint', 'scripts', 'copyassets'],
		function() {
			plugins.util.log('ok ready for prod');
		}
	)
});

//Task : Default
plugins.gulp.task('default', function() {
	var mode = process.argv.slice(2)[0].split('--')[1];

	if (mode == 'dev') {
		ENV = 'dev';
		plugins.gulp.start('compile:dev');
	} else if (mode == 'prod') {
		ENV = 'prod';
		plugins.gulp.start('compile:prod');
	}

});

// Handle error
function errorHandler(error) {
	console.log(error.toString());
	this.emit('end');
}

//Task Gitinfo
plugins.gulp.task('gitinfo', function(){
	plugins.gitRev.branch(function(str){
		console.log('branch -> ', str);
	})
});