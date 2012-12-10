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
          'dist/baseline.css': 'sample.less'
        }
      }
    },
    watch: {
      js: {
        files: ['baseline.less', 'sample.less', 'lib/*'],
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
