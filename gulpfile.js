var gulp = require('gulp')

// Config for paths
paths = {
  assets: 'app/assets/',
  assets_scss: 'app/assets/scss/',
  dist: 'dist/',
  templates: 'app/templates',
  npm: 'node_modules/',
  prototype_scss: 'node_modules/@gemmaleigh/prototype-scss-refactor/**/*.scss' // This can be removed later
}

// Setup tasks
// Copy prototype-scss-refactor into app/assets/scss
// This step can be removed later once these files exist here
gulp.task('copy:prototype-scss-refactor', function () {
  gulp.src(paths.prototype_scss)
    .pipe(gulp.dest(paths.assets_scss))
})
