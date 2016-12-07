'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')
const sass = require('gulp-sass')

// This file provides the build tasks for the Fractal theme assets
// To keep the "theme" assets separate, static assets can be found in /fractal/govuk-theme/
// At present only the Sass is compiled to css, later tasks for scripts and image can be added.

gulp.task('fractal:assets', [
  'fractal:assets:styles'
  // TODO: 'fractal:theme:scripts',
  // TODO: 'fractal:theme:images'
])

// Styles - compile SCSS
gulp.task('fractal:assets:styles', () => {
  console.log('theme styles compiled')
  return gulp.src(paths.fractalThemeScss + '**/**/*.scss')
   .pipe(sass({
     outputStyle: 'expanded',
     includePaths: ['./fractal/govuk-theme/assets/scss/tech-docs-template']
   }).on('error', sass.logError))
    .pipe(gulp.dest(paths.fractalThemeCss))
})

// TODO: Scripts
// gulp.task('fractal:assets:scripts', () => {})

// TODO: Images
// gulp.task('fractal:assets:images', () => {})
