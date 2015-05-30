'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jpgmin: {
      src: ['pre/**/*.{jpg,jpeg,jpe}'],
      dest: 'img/',
      quality: 80 // use lossy JPEG compression at 80% quality
    },
    clean: {
    pre: ['pre/**/*',]
    }
  });
  // Load tasks
  grunt.loadNpmTasks('grunt-imagine');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register tasks
  grunt.registerTask('default', ['jpgmin','clean']);
};