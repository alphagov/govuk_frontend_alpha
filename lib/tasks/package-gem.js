'use strict'

const packageJson = require('../../package.json')
const paths = require('../../config/paths.json')
const packageName = require('../../gulpfile.js').packageName

const gulp = require('gulp')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')
const run = require('gulp-run')
const del = require('del')

gulp.task('package:gem', cb => {
  runSequence('package:gem:prepare', 'package:gem:build', 'package:gem:tgz', 'package:gem:copy', 'package:gem:clean', cb)
})

gulp.task('package:gem:prepare', () => {
  gulp.src(paths.bundleCss + '**/*').pipe(gulp.dest(paths.gemCss))
  gulp.src(paths.bundleImg + '**/*').pipe(gulp.dest(paths.gemImg))
  gulp.src(paths.bundleScss + '**/*').pipe(gulp.dest(paths.gemScss))
  gulp.src(paths.bundleJs + '**/*').pipe(gulp.dest(paths.gemJs))
  gulp.src(paths.bundleTemplates + '**/*').pipe(gulp.dest(paths.gemTemplates))

  gulp.src(paths.bundleComponents + '**/*')
    .pipe(rename(path => {
    // Partials files require a _ prefix, and use underscores, not dashes
      path.basename = '_' + path.basename.replace(/-/g, '_')
    }))
    .pipe(gulp.dest(paths.gemComponents))

  gulp.src(`lib/packaging/gem/${packageJson.name}.gemspec`).pipe(gulp.dest(paths.gem))
  gulp.src('lib/packaging/gem/lib/govuk_frontend_alpha.rb').pipe(gulp.dest(paths.gemLib))
  return gulp.src('package.json').pipe(gulp.dest(paths.gemConfig))
})

gulp.task('package:gem:tgz', () => {
  run(`tar -czf ${paths.pkg}${packageName}-gem.tgz -C ${paths.gem} .`).exec()
})

gulp.task('package:gem:build', () => run(`cd ${paths.gem} && gem build ${packageJson.name}.gemspec`).exec())
gulp.task('package:gem:copy', () => gulp.src(`${paths.gem}${packageName}.gem`).pipe(gulp.dest(paths.pkg)))
gulp.task('package:gem:clean', () => del(`${paths.gem}${packageName}.gem`))
