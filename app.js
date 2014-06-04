 angular.module('helpApp', ['qaStore','ngRoute','haQuestions']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/questions/:url', {
      controller: 'QuestionsController',
      controllerAs: 'questionsCtrl',
      templateUrl: 'questions/questions.html'
    }).
    when('/questions/help-share-components', {
      templateUrl: 'questions/leaves/share-components.html'
    }).
    when('/questions/help-support-components', {
      templateUrl: 'questions/leaves/support-components.html'
    }).
    when('/questions/help-pr-flags', {
      templateUrl: 'questions/leaves/pr-flags.html'
    }).
    when('/questions/help-triage', {
      templateUrl: 'questions/leaves/help-triage.html'
    }).
    when('/questions/help-share-resources', {
      templateUrl: 'questions/leaves/share-resources.html'
    }).
    when('/questions/help-update-tutorial', {
      templateUrl: 'questions/leaves/update-tutorial.html'
    }).
    when('/questions/help-update-docs', {
      templateUrl: 'questions/leaves/update-docs.html'
    }).
    otherwise('/questions');
  }]);


