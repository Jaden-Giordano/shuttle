const gulp = require('gulp'); // eslint-disable-line no-undef
const browserify = require('browserify'); // eslint-disable-line no-undef
const babelify = require('babelify'); // eslint-disable-line no-undef
const stylus = require('gulp-stylus'); // eslint-disable-line no-undef
const eslint = require('gulp-eslint'); // eslint-disable-line no-undef

const source = require('vinyl-source-stream'); // eslint-disable-line no-undef
const clean = require('gulp-clean'); // eslint-disable-line no-undef

const bases = {
  base: './',
  src: 'src/',
  dist: 'dist/'
};

const paths = {
  modules: 'node_modules/**',
  app: ['app/**'],
  html: 'public/views/index.html',
  style: 'public/styles/main.styl',
  compileStart: './src/public/main.js',
  assets: 'assets/**'
};

gulp.task('clean', () => {
  return gulp.src(bases.dist, {
    read: false
  })
    .pipe(clean());
});

gulp.task('lint', () => {
  return gulp.src('**/*.js', {
    cwd: bases.src
  })
    .pipe(eslint({
      rulePaths: [bases.base]
    }))
    .pipe(eslint.format());
});

gulp.task('compile', ['clean'], () => {
  return browserify({
    entries: paths.compileStart,
    extensions: ['.js'],
    debug: true
  })
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', ['clean'], () => {
  return gulp.src(paths.style, {
    cwd: bases.src
  })
    .pipe(stylus())
    .pipe(gulp.dest(bases.dist));
});

gulp.task('copy', ['clean'], () => {
  gulp.src(paths.app, {
    cwd: bases.src
  })
    .pipe(gulp.dest(bases.dist));

  gulp.src(paths.assets, {
    cwd: bases.src
  })
    .pipe(gulp.dest(bases.dist + 'assets/'));

  return gulp.src(paths.html, {
    cwd: bases.src
  })
    .pipe(gulp.dest(bases.dist));
});

gulp.task('app', ['lint', 'compile', 'styles', 'copy']);
gulp.task('default', ['clean', 'app']);
