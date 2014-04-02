module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:8000/test/jquery-indexchar.test.html'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('test',['connect','qunit']);
};
