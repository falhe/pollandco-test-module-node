var gulp    = require('gulp'),
browserSync = require('browser-sync').create(),
plumber     = require('gulp-plumber'),
gutil       = require('gulp-util'),
sass        = require('gulp-sass'),
minifyCss   = require('gulp-minify-css'),
uglify      = require('gulp-uglify'),
sourcemaps  = require('gulp-sourcemaps'),
watchify    = require('watchify'),
browserify  = require('browserify'),
source      = require('vinyl-source-stream'),
buffer      = require('vinyl-buffer'), //Convert streaming vinyl to buffer for uglify
bundler     = watchify(browserify('./public/js/main.js'), { debug: true}),
mocha       = require('gulp-mocha'),
notify      = require('gulp-notify'),
rename      = require('gulp-rename'),
del         = require('del'),
requireDir  = require('require-dir');

// compile js
gulp.task('js', function(){
    gutil.log('compiling js browserify !!!!');
    return browserify({
        entries: './public/js/main.js',
        debug: true
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/dist/js'))
    .pipe(notify({ message: 'js task complete'}));
});

// create a task that ensures the `js` task is complete before reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// compile sass
gulp.task('styles', function() {
    gutil.log('compiling styles scss !!!!');
    return gulp.src('./public/sass/*.scss')
        .pipe(sass({ outputStyle: 'expanded'})// expanded, nested, compressed
        .pipe(plumber())
        .on('error', sass.logError))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/dist/css'))
        .pipe(browserSync.stream())
        .pipe(notify({message:'styles task complete'}));
});

// serve to launch browserSync and watch JS files
gulp.task('serve', ['js', 'styles'], function(){
    browserSync.init({
        proxy: 'http://localhost/pollandco-test-module-node/public/'
    });

    gulp.watch('public/js/**/*.js', ['js-watch']);
    gulp.watch('public/sass/*.scss', ['styles']);
    gulp.watch('resources/views/{,layout/}/{,pages/}{,admin/}/{,auth/}/{,emails/}/{,errors/}/{,templates/}/{,users/}*.php').on('change', browserSync.reload);
});

gulp.task('test', function() {
    return gulp.src('./test/*.js', {
            read: false
        })
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha());
});

// clean dist directory for fresh build
gulp.task('clean', function(){
    return del(['public/dist']);
});

// compile scss and js
gulp.task('default', ['clean'], function(){
    gulp.start('styles', 'js');
});


/*
* NEW ORGANISATION AND OPTIMIZATION FOR GULP
*/
// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });