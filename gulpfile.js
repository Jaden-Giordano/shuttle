const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const stylus = require('gulp-stylus');

const source = require('vinyl-source-stream');
const clean = require('gulp-clean');

const bases = {
  src: 'src/',
  dist: 'dist/'
}

const paths = {
  app: ['app/**/*'],
  html: 'index.html',
  style: 'styles/main.styl'
}

gulp.task('clean', () => {
  return gulp.src(bases.dist, {read: false})
    .pipe(clean());
});

gulp.task('compile', ['clean'], () => {
  return browserify({
    entries: './src/scripts/app.js',
    extensions: ['.js'],
    debug: true
  })
    .plugin('browserify-bower', {
      require: ['*']
    })
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
  return gulp.src(paths.style, {cwd: bases.src})
    .pipe(stylus())
    .pipe(gulp.dest(bases.dist));
})

gulp.task('copy', ['clean'], () => {
  gulp.src(paths.app, {cwd: bases.src})
    .pipe(gulp.dest(bases.dist));

  return gulp.src(paths.html, {cwd: bases.src})
    .pipe(gulp.dest(bases.dist));
});

gulp.task('app', ['compile', 'styles', 'copy']);
gulp.task('default', ['clean', 'app']);
