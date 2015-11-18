var gulp            = require('gulp');
var browserify      = require('gulp-browserify');
var watchify        = require('watchify');
var uglify          = require('gulp-uglify');
var hbsfy           = require("hbsfy");
var sass            = require('gulp-sass');
var source          = require('vinyl-source-stream');

var elixir          = require('laravel-elixir');
//var browserify = require('laravel-elixir-browserify');

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


elixir(function(mix) {
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
});

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