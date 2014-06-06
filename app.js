angular.module('helpApp',
  ['dataFetch', 'qaStore','ngRoute','haQuestions','haPrFlags', 'haShareResources', 'haSupportComponents']).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/questions/help-share-components', {
        controller: 'SupportComponentsController',
        controllerAs: 'supComponentsCtrl',
        templateUrl: 'questions/leaves/share-components.html'
      }).
      when('/questions/help-support-components', {
        templateUrl: 'questions/leaves/support-components.html'
      }).
      when('/questions/help-pr-flags', {
        controller: 'PrFlagsController',
        controllerAs: 'prFlagsCtrl',
        templateUrl: 'questions/leaves/pr-flags.html'
      }).
      when('/questions/help-triage', {
        templateUrl: 'questions/triage/help-triage.html'
      }).
      when('/questions/help-share-resources', {
        controller: 'ShareResourcesController',
        controllerAs: 'shareResourcesCtrl',
        templateUrl: 'questions/share-resources/share-resources.html'
      }).
      when('/questions/help-update-tutorial', {
        templateUrl: 'questions/leaves/update-tutorial.html'
      }).
      when('/questions/help-update-docs', {
        templateUrl: 'questions/leaves/update-docs.html'
      }).
      when('/questions/:url', {
        controller: 'QuestionsController',
        controllerAs: 'questionsCtrl',
        templateUrl: 'questions/questions.html'
      }).
      otherwise('/questions');
  }]);


