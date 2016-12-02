'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')
const sass = require('gulp-sass')

// Compile Sass to CSS
gulp.task('fractal:theme', [
  'fractal:styles:compile'
])

gulp.task('fractal:styles:compile', () => {
  return gulp.src(paths.fractalScss + '**/*.scss')
    // TODO: Make the govuk frontend alpha helper sass files available to this theme stylesheet
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.fractalTheme))
})
