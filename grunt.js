module.exports = function(grunt) {
  grunt.initConfig({
    info: '<json:package.json>',
    meta: {
      banner: '/*!\n'+
              ' * <%= info.name %> - <%= info.description %>\n'+
              ' * v<%= info.version %>\n'+
              ' * <%= info.homepage %>\n'+
              ' * copyright <%= info.copyright %> <%= grunt.template.today("yyyy") %>\n'+
              ' * <%= info.license %> License\n'+
              '*/'
    },
    less: {
      full: {
        files: {
          'examples/baseline.css': 'examples/sample.less'
        }
      }
    },
    watch: {
      js: {
        files: ['baseline.less', 'lib/*', 'examples/sample.less'],
        tasks: 'less' 
      }
    },
    server:{
      port: 8000,
      base: '.'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', 'less');
  grunt.registerTask('dev', 'default server watch');
}
