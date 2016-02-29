const crypto = require('crypto')
const fs = require('fs')

const gitRevSync = require('git-rev-sync')
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

const pkg = require('./package.json')
const modernizr = require('./modernizr-config.json')

const js = [
  'src/_assets/javascripts/**/*.js',
  '!src/_assets/javascripts/vendor/**/*.js',
  '!src/_assets/javascripts/main.js'
]

const scss = [
  'src/_assets/stylesheets/**/*.scss'
]

const html = [
  'dist/**/*.html'
]

gulp.task('default', ['watch'])
gulp.task('lint', ['standard', 'sass-lint', 'htmlhint'])

gulp.task('htmlhint', () => {
  return gulp.src(html)
    .pipe($.htmlhint())
    .pipe($.htmlhint.failReporter())
})

gulp.task('standard', () => {
  return gulp.src(js)
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('sass-lint', () => {
  return gulp.src(scss)
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
})

gulp.task('watch', () => {
  gulp.src(html)
    .pipe($.watch(html))
    .pipe($.plumber())
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())

  gulp.src(js)
    .pipe($.watch(js))
    .pipe($.plumber())
    .pipe($.standard())
    .pipe($.standard.reporter('default'))

  return gulp.src(scss)
    .pipe($.watch(scss))
    .pipe($.plumber())
    .pipe($.sassLint())
    .pipe($.sassLint.format())
})

gulp.task('modernizr', () => {
  return gulp.src('dist/**/*')
    .pipe($.modernizr('assets/modernizr.js'), {options: modernizr.options})
    .pipe($.replace('testRunner();', 'testRunner(); setClasses(classes);'))
    .pipe($.uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('hash', () => {
  const src = 'assets/modernizr'

  const hash =
    crypto.createHash('sha1')
    .update(fs.readFileSync(`dist/${src}.js`, 'utf8'), 'utf8')
    .digest('hex')

  const dest = `${src}-${hash}`

  fs.renameSync(`dist/${src}.js`, `dist/${dest}.js`)

  return gulp.src('dist/**/*')
    .pipe($.replace(`${src}.js"`, `${dest}.js"`))
    .pipe(gulp.dest('dist'))
})

gulp.task('minify', () => {
  return gulp.src('dist/**/*.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
      preserveLineBreaks: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('deploy', () => {
  return gulp.src('dist/**/*')
    .pipe($.ghPages({
      remoteUrl: `git@github.com:${pkg.repository}.git`,
      message: `Deploy ${gitRevSync.short()} from v${pkg.version}`
    }))
})
