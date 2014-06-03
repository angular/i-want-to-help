 angular.module('helpApp', ['qaStore','ngRoute','haQuestions']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/questions/:id?', {
      controller : 'QuestionsController',
      controllerAs: 'questionsCtrl',
      templateUrl: 'questions/questions.html'
    }).
    otherwise('/questions');
  }]);


