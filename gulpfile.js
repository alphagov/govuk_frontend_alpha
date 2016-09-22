'use strict'

const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename')
const transpiler = require('./lib/transpilation/transpiler.js')

// Config for paths
const paths = {
  assets: 'app/assets/',
  assets_scss: 'app/assets/scss/',
  dist: 'dist/',
  templates: 'app/templates/',
  npm: 'node_modules/',
  prototype_scss: 'node_modules/@gemmaleigh/prototype-scss-refactor/**/*.scss' // This can be removed later
}

// Task for cleaning the distribution
gulp.task('clean', () => {
  return del([paths.dist + '*'])
})

// Task for copying the assets
gulp.task('copy:prototype-scss-refactor', () => {
  gulp.src(paths.prototype_scss)
    .pipe(gulp.dest(paths.assets_scss))
})

// Task for transpiling the templates
let transpileRunner = templateLanguage => {
  return gulp.src(paths.templates + 'govuk_template.html')
    .pipe(transpiler(templateLanguage))
    .pipe(rename({extname: '.html.' + templateLanguage}))
    .pipe(gulp.dest(paths.dist))
}
gulp.task('transpile', ['transpile:nunjucks', 'transpile:erb', 'transpile:handlebars', 'transpile:django'])
gulp.task('transpile:nunjucks', () => {
  return gulp.src(paths.templates + 'govuk_template.html')
    .pipe(rename({extname: '.html.nunjucks'}))
    .pipe(gulp.dest(paths.dist))
})
gulp.task('transpile:erb', transpileRunner.bind(null, 'erb'))
gulp.task('transpile:handlebars', transpileRunner.bind(null, 'handlebars'))
gulp.task('transpile:django', transpileRunner.bind(null, 'django'))
