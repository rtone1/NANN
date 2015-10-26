module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   build: {
    //     src: 'public/javascripts/app.js',
    //     dest: 'public/javascripts/build/app.min.js'
    //   }
    // },
    //
    // sass: {
    //   dist: {
    //     options: {
    //       style: 'compressed'
    //     },
    //     files: {
    //       'public/stylesheets/build/main.css': 'public/stylesheets/common.scss',
    //     }
    //   }
    // },
    // Watch for changes!
    watch: {
      options: {
        livereload: true,
        spawn: false // Very important, don't miss this
      },
      // scripts: {
      //   files: ['js/libs/*.js', 'js/main.js'],
      //   tasks: ['uglify']
      // },
      // images: {
      //   files: 'images/*.{png,jpg,gif}',
      //   tasks: ['imagemin']
      // },
      css: {
        files: '**/*.css'
      }
    },
    // Inject changes into the browser!
    browserSync: {
          bsFiles: {
            src : [
            '**/*.css',
            '**/*.js',
            '**/*.html'
            ]
          },
          options: {
            proxy: 'localhost:8000'
          }
        }

  }); // end of task

  // Load the plugin that provides the "uglify" and "sass" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync']);

  // grunt.registerTask('listen', ['browserSync', 'watch']);

};
