root = './app'
src = './src'
tmp = './tmp'
release = './release'

dirJS = '/js'
dirJSEntries = '/entries'
dirCSS = '/css'

module.exports =
  root: root
  src: src

  browserSync:
    watch: [
      "#{root}/**/*.html"
      "#{root}/**/*.js"
      "#{root}/**/*.css"
    ]
    init:
      default:
        port: 8901
        server:
          baseDir: root
        open: false
      open:
        port: 8901
        server:
          baseDir: root
        open: true

  jsLib:
    name: 'lib.js'
    src: [
      './bower_components/three.js/three.min.js'
      './src/js/lib/debug.js'
    ]
    dest: "#{root}#{dirJS}"

  watch:
    js:
      files: [
        {
          name: 'main.js'
          src: "#{src}#{dirJS}#{dirJSEntries}"
          dest:
            name: 'main.js'
            dir: "#{root}#{dirJS}"
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
          dest: "#{root}#{dirCSS}"
        }
      ]

  release:
    src: "#{root}/**"
    base: root.replace(/\.\//, '')
    dest: release
