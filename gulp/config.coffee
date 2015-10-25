app = './app'
src = './src'
tmp = './tmp'
release = './release'

server = './server'

dirJS = '/js'
dirCSS = '/css'

module.exports =
  app: app
  src: src

  browserSync:
    watch: [
      "#{app}/**/*.html"
      "#{app}/**/*.js"
      "#{app}/**/*.css"
    ]
    init:
      default:
        port: 8901
        server:
          baseDir: app
        open: false
      open:
        port: 8901
        server:
          baseDir: app
        open: true

  server:
    file: "#{server}/index.js"

  jsLib:
    name: 'lib.js'
    src: [
      './bower_components/three.js/three.min.js'
      './src/js/lib/TrackballControls.js'
      './bower_components/socket.io-client/socket.io.js'
      './bower_components/jquery/dist/jquery.min.js'
      './src/js/lib/debug.js'
    ]
    dest: "#{app}#{dirJS}"

  watch:
    js:
      files: [
        {
          name: 'index.js'
          src: "#{src}#{dirJS}"
          dest:
            name: 'main.js'
            dir: "#{app}#{dirJS}"
        }
      ]
    css:
      files: [
        {
          src: "#{src}#{dirCSS}/**/*.scss"
          dest: "#{tmp}#{dirCSS}"
        }
      ]
      concat: [
        {
          name: 'main.css'
          src: "#{tmp}#{dirCSS}/**/*.css"
          dest: "#{app}#{dirCSS}"
        }
      ]

  release:
    src: "#{app}/**"
    base: app.replace(/\.\//, '')
    dest: release
