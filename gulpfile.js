/*var gulp            = require('gulp');
var browserify      = require('gulp-browserify');
var watchify        = require('watchify');
var uglify          = require('gulp-uglify');
var hbsfy           = require("hbsfy");
var sass            = require('gulp-sass');
var source          = require('vinyl-source-stream');

var elixir          = require('laravel-elixir'); */


var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'), //Convert streaming vinyl to buffer for uglify
    bundler = watchify(browserify('./public/js/app/views/index.js'), {debug: true}),
    mocha = require('gulp-mocha');

// TO DO BIEN FAIRE LE FICHIER GULP pour les watch sass et js

bundler.on('update', bundle);

function bundle() {
    gutil.log('Compiling JS...');
    return bundler.bundle().on('error', function(err) {
            gutil.log(err.message);
            gutil.log('ERREUR DANS LA COMPILATION DU JS !!!!!!!!!!!!!!!!!');
            browserSync.notify('Browserify Error!');
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        // .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('./public/js/app/build/'))
        .pipe(browserSync.stream({
            once: true
        }));
}

gulp.task('bundle', function() {
    return bundle();
});

//Compile SASS
gulp.task('styles', function() {
    gutil.log('compiling styles scss');
    return gulp.src('./public/css/sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        //.pipe(minifyCss())
        .pipe(gulp.dest('./public/dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['styles', 'bundle'], function() {
    browserSync.init({
        server: './'
    });
    gulp.watch('./scss/*.scss', ['styles']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('./app/views/templates/*.hbs').on('change', browserSync.reload);
});

gulp.task('test', function() {
    return gulp.src('./test/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha());
});

// Browsersync proxy pour pouvoir l'utiliser avec un serveur PHP
gulp.task('browser-sync', function(){
    browserSync.init({
        proxy: 'http://localhost/test/projet/pollandco-test-module-node/public/'
    });
    gulp.watch('public/css/sass/*.scss', ['styles']);
});


// gulp.task('browserify', function() {
//     return browserify('js/app.js').bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('./build/'));
// });

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: './'
//         }
//     });
// });


// gulp.task('default', ['styles', 'browser-sync'], function() {
//     gulp.watch('scss/*.scss', ['styles']);
//     gulp.watch('js/*.js', ['scripts']);
//     gulp.watch('*.html').on('change', browserSync.reload);
// });

//***** ANCIEN GULPFILE A PARTIR D ICI ******//


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */


/*elixir(function(mix) {
    // make sure this line is inside of elixir callback function
    // to replace default browserify task
    //browserify.init();

    mix.less('app.less');

    gulp.task('compile-js', function(){
        var options;

        options = {
            debug: false
        };

        browserify('public/js/main.js', options)
            .transform(hbsfy)
            .bundle()
            .pipe(source('main.min.js'))
            .pipe(gulp.dest('public/js/'));
    });
}); */

/*
gulp.task('js', function(){
    return gulp.src('public/js/main.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('public/js/compiled/'));
        //.transform(hbsfy)
        //.bundle()
        //.pipe(source('main.min.js'))
});
*/

/*
gulp.task('sass', function(){
    return gulp.src('public/css/app.scss')
        .pipe(sass({ sourceComments: 'map' }))
        .pipe(gulp.dest('public/css/'));
});
*/