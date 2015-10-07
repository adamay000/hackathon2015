gulp = require 'gulp'
$ = require('gulp-load-plugins')()
config = require '../config'

gulp.task 'release-copy', ->
  gulp.src config.release.dest, {read: false}
  .pipe $.clean()
  .on 'end', ->
    gulp.src config.release.src, {base: config.release.base}
    .pipe gulp.dest config.release.dest
