/*global module:false*/
module.exports = function (grunt) {
  var os = require("os");
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    gruntfile: {
      src: 'Gruntfile.js'
    },
    app: {
      hostname: os.hostname(),
      source_dir: 'html',
      connect_port: grunt.option('connect_port') || 9012,
      server_port: 8080
    },
    open: {
      dev: {
        url: 'http://<%= app.hostname %>:<%= app.connect_port %>/html'
      }
    },
    connect: {
      options: {
        hostname: '*',
      },
      dev: {
        options: {
          port: '<%= app.connect_port %>',
          base: '<%= app.build_dir %>'
        }
      }
    },
    watch: {
      dev: {
        files: ['<%= app.source_dir %>/**/*'],
        //tasks: ['copy'],
        options: {
          livereload: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          args: ['dev'],
          nodeArgs: ['--debug'],
          callback: function (nodemon) {
            // opens browser on initial server start
            nodemon.on('config:update', function () {
              // Delay before server listens on port
              setTimeout(function () {
                require('open')('http://' + os.hostname() + ':8080');
              }, 1000);
            });
          },
          env: {
            PORT: '<%= app.connect_port %>'
          },
          cwd: __dirname,
          ignore: ['node_modules/**'],
          ext: 'js',
          watch: ['server'],
          delay: 1000,
          legacyWatch: true
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['bower_components/**/*.min.js'], dest: 'html/js', filter: 'isFile' },
          { expand: true, flatten: true, src: ['bower_components/**/*.min.css'], dest: 'html/css', filter: 'isFile' }
        ],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');


  grunt.registerTask('build', ['copy']);
  grunt.registerTask('run', [
    'build',
    'nodemon'
  ]);
  grunt.registerTask('dev', [
    'build',
    'connect:dev',
    'open:dev',
    'watch:dev'
  ]);
};