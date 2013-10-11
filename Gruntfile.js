'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['assets/components/sass-bootstrap/lib/*'],
            dest: 'assets/css/sass/bootstrap',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/components/sass-bootstrap/js/*'],
            dest: 'assets/js/vendor/bootstrap',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/components/jquery/jquery.js'],
            dest: 'assets/js/vendor/jquery',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/components/modernizr/modernizr.js'],
            dest: 'assets/js/vendor/modernizr',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['assets/components/sass-bootstrap/fonts/*'],
            dest: 'assets/fonts',
            filter: 'isFile'
          }
        ]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.min.js',
        '!assets/js/jquery.min.js',
        '!assets/js/modernizr.min.js',
        '!assets/js/bootstrap.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/main.min.css': 'assets/css/sass/app.scss'
        }
      }
    },
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': ['assets/js/vendor/jquery/jquery.js']
        }
      },
      modernizr: {
        files: {
          'assets/js/modernizr.min.js': ['assets/js/vendor/modernizr/modernizr.js']
        }
      },
      bootstrap: {
        files: {
          'assets/js/bootstrap.min.js': [
            'assets/js/vendor/bootstrap/transition.js',
            'assets/js/vendor/bootstrap/alert.js',
            'assets/js/vendor/bootstrap/button.js',
            'assets/js/vendor/bootstrap/carousel.js',
            'assets/js/vendor/bootstrap/collapse.js',
            'assets/js/vendor/bootstrap/dropdown.js',
            'assets/js/vendor/bootstrap/modal.js',
            'assets/js/vendor/bootstrap/tooltip.js',
            'assets/js/vendor/bootstrap/popover.js',
            'assets/js/vendor/bootstrap/scrollspy.js',
            'assets/js/vendor/bootstrap/tab.js',
            'assets/js/vendor/bootstrap/affix.js',
            'assets/js/vendor/bootstrap/*.js'
          ]
        }
      },
      dist: {
        files: {
          'assets/js/scripts.min.js': ['assets/js/scripts.js']
        }
      }
    },
    version: {
      options: {
        file: 'lib/scripts.php',
        css: 'assets/css/main.min.css',
        cssHandle: 'roots_main',
        js: 'assets/js/scripts.min.js',
        jsHandle: 'roots_scripts'
      }
    },
    watch: {
      sass: {
        files: [
          'assets/css/sass/*.sass',
          'assets/css/sass/*.scss'
        ],
        tasks: ['sass', 'version']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'assets/css/main.min.css',
          'assets/js/scripts.min.js',
          'templates/*.php',
          '*.php'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-wp-version');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('weroots-setup', [
    'copy',
    'clean',
    'sass',
    'uglify',
    'version'
  ]);
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify',
    'version'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
};
