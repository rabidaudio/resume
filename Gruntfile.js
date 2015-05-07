'use strict';

var fs   = require('fs');
var path = require('path');

module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks("grunt-open");
  grunt.loadNpmTasks("grunt-editor");

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options:{
        spawn: false
      },
      latex: {
        files: ['*.jade', '*.css'],
        tasks: ['build'],
      }
    },

    open: {
      html:{
        path: 'resume.html'
      }
    },
    jade: {
      dest: {
        files: {
          'resume.html': ['resume.jade']
        }
      }
    },
    editor: {
      options: {
        editor: '<%= pkg.editor || process.env.VISUAL || process.env.EDITOR %>'
      },
      src: ['resume.jade']
    },
    clean: ['*.log', '*.aux']
  });

  grunt.registerTask('build', ['jade', 'clean', 'open']);

  grunt.registerTask('default', ['editor', 'watch']);

};
