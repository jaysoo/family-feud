// Karma configuration
// Generated on Wed Nov 12 2014 22:53:41 GMT-0500 (EST)

module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'jasmine'],

    files: [
      './node_modules/traceur/bin/traceur-runtime.js',
      'src/modules/**/*Spec.js'
    ],

    preprocessors: {
      'src/modules/**/*Spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['es6ify']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_DEBUG,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
