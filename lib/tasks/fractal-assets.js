'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')
const sass = require('gulp-sass')

const scssToJson = require('scss-to-json')
const fs = require('fs')

// This file provides the build tasks for the Fractal theme assets
// To keep the "theme" assets separate, static assets can be found in /fractal/govuk-theme/
// At present only the Sass is compiled to css, later tasks for scripts and image can be added.

gulp.task('fractal:assets', [
  'fractal:assets:styles',
  'fractal:assets:colours'
  // TODO: 'fractal:theme:scripts',
  // TODO: 'fractal:theme:images'
])

// Styles - compile SCSS
gulp.task('fractal:assets:styles', () => {
  console.log('theme styles compiled')
  return gulp.src(paths.fractalThemeScss + '**/**/*.scss')
   .pipe(sass({
     outputStyle: 'expanded',
     includePaths: [paths.fractalThemeScss + 'tech-docs-template']
   }).on('error', sass.logError))
    .pipe(gulp.dest(paths.fractalThemeCss))
})

// Colours - generate JSON from SCSS
gulp.task('fractal:assets:colours', () => {
  const filePath = paths.assetsScss + 'settings/_colours.scss'
  const colorsJson = scssToJson(filePath)
  fs.writeFileSync(paths.srcDocs + '07-colour/07-colour.config.json', JSON.stringify({ context: { colors: colorsJson } }), 'UTF-8')
})

// TODO: Scripts
// gulp.task('fractal:assets:scripts', () => {})

// TODO: Images
// gulp.task('fractal:assets:images', () => {})
