gulp = require 'gulp'
$ = require('gulp-load-plugins')()
config = require '../config'

gulp.task 'websocket', ->

  $.developServer.listen {
    path: config.server.file
  }

  gulp.watch config.server.file, $.developServer.restart