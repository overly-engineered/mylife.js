module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        build: {
            src: 'mylife.js',
            dest: 'min/mylife.min.js'
        }
    },
   sass: {
      dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'min/mylife.min.css': 'css/mylife.scss'
          }
      }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};