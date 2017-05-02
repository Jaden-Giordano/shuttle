const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const stylus = require('gulp-stylus');
//const electron = reqiure('gulp-electron');
const eslint = require('gulp-eslint');

const source = require('vinyl-source-stream');
const clean = require('gulp-clean');

const bases = {
  base: './',
  src: 'src/',
  dist: 'dist/'
}

const paths = {
  modules: 'node_modules/**',
  app: ['app/**'],
  html: 'public/views/index.html',
  style: 'public/styles/main.styl',
  compileStart: './src/public/main.js',
  assets: 'assets/**'
}

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
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
      },
      rules: {
        indent: ['error', 2],
        semi: ['error', 'always'],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single']
      }
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
})

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
