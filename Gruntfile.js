module.exports = function(grunt) {
  grunt.initConfig({
    ghpage: {
      simple: {
        input: 'docs.md',
        data: {
          pageTitle: 'Oban - a set of Less mixins to jumpstart your project',
          github: 'github.com/jgallen23/oban',
          builtBy: 'Greg Allen',
          builtTwitter: 'jgaui',
          twitterFollow: 'JGAui',
          analytics: 'UA-24017782-2'
        }
      }
    },
    shell: {
      docs: {
        command: 'git fetch && git checkout origin/master docs.md && git checkout origin/master examples',
        options: {
          stdout: true
        }
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true
        }

      }
    }

  });

  grunt.loadNpmTasks('grunt-ghpage');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['shell', 'ghpage']);
  grunt.registerTask('dev', ['default', 'connect']);
};
