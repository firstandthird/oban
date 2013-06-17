module.exports = function(grunt) {
  grunt.initConfig({
    info: grunt.file.readJSON('bower.json'),
    meta: {
      banner: '//\n'+
              '// <%= info.name %> - <%= info.description %>\n'+
              '// v<%= info.version %>\n'+
              '// <%= info.homepage %>\n'+
              '// copyright <%= info.copyright %> <%= grunt.template.today("yyyy") %>\n'+
              '// <%= info.license %> License\n'+
              '//\n'
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      oban: {
        src: [
          'lib/mixins/*.less',
          'lib/*.less',
        ],
        dest: 'oban.less'
      }
    },
    less: {
      full: {
        files: {
          'examples/oban.css': 'examples/sample.less'
        }
      }
    },
    watch: {
      js: {
        files: [
          'lib/**/*', 
          'examples/sample.less'
        ],
        tasks: 'default'
      }
    },
    reloadr: {
      main: [
        'examples/*'
      ]
    },
    connect:{
      examples: {
        options: {
          base: 'examples',
          hostname: '*'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-reloadr');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['concat', 'less']);
  grunt.registerTask('dev', ['connect', 'reloadr', 'watch']);
};
