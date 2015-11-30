var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'), //Convert streaming vinyl to buffer for uglify
    bundler = watchify(browserify('./public/js/main.js'), {
        debug: true
    }),
    mocha = require('gulp-mocha');


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
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        // .pipe(uglify())
        .pipe(gulp.dest('./public/js/app/build/'))
        .pipe(browserSync.stream({
            once: true
        }));
}

gulp.task('bundle', function() {
    return bundle();
});

//Compile JS
gulp.task('javascript', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './public/js/main.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js/app/build/'));
});

//WATCH JS
gulp.task('watchingjs', function(){
    return browserify({
        entries: './public/js/main.js',
        debug: true
    })
    .bundle()
    .pipe(source('bundle-two.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/dist/js'))
});

//Compile SASS
gulp.task('styles', function() {
    gutil.log('compiling styles scss !!!!');
    return gulp.on('error', function(err) {
            gutil.log(err.message);
            gutil.log('styles error !!!!');
            this.emit('end');
        }).src('./public/sass/*.scss')
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
    return gulp.src('./test/*.js', {
            read: false
        })
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha());
});

// Browsersync proxy pour pouvoir l'utiliser avec un serveur PHP
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'http://localhost/pollandco-test-module-node/public/'
    });

    gulp.watch('public/sass/*.scss', ['styles']);
    gulp.watch('resources/views/{,layout/}/{,pages/}{,admin/}/{,auth/}/{,emails/}/{,errors/}/{,templates/}/{,users/}*.php').on('change', browserSync.reload);
    gulp.watch('public/js/**/*.js', ['watchingjs']);
});