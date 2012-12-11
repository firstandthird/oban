module.exports = function(grunt) {
  grunt.initConfig({
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
