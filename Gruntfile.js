module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        build: {
            src: 'mylife.js',
            dest: 'min/mylife.min.js',
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
    },
    
    jshint: {
    all: ['Gruntfile.js', '*.js']
    },
    
    cssmin: {
        target: {
            files: [{
              expand: true,
              cwd: 'node_modules/normalize.css',
              src: ['*.css', '!*.min.css'],
              dest: 'min',
              ext: '.min.css'
            }]
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin']);

};