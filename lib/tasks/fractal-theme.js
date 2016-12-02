'use strict'

const paths = require('../../config/paths.json')

const gulp = require('gulp')
const sass = require('gulp-sass')

// Compile Sass to CSS
gulp.task('fractal:theme', [
  'fractal:styles:compile'
])

gulp.task('fractal:styles:compile', () => {
  return gulp.src(paths.fractalThemeAssetsScss + '**/*.scss')
    // TODO: Make the govuk frontend alpha helper sass files available to this theme stylesheet
   .pipe(sass({outputStyle: 'expanded',
              includePaths: ['app/assets/scss/']}).on('error', sass.logError))
    .pipe(gulp.dest(paths.fractalThemeAssetsCss))
})
