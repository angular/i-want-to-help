// Karma configuration
// Generated on %DATE%

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/qa-store/qa-store.js',
      'components/qa-store/qa-store-service.js',
      'components/qa-store/qa-store_test.js',
      'questions/questions.js',
      'questions/*.js'
    ],
    exclude: [
    ],
    preprocessors: undefined,
    browsers: ['Chrome']
  });
};