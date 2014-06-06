angular.module('haPrFlags').
controller('PrFlagsController', ['$http','$scope', function($http,$scope) {
  this.noLabels = 'This issue has no labels, learn more about triaging issues'+
          '<a ng-href="#questions/help-triage">here</a>.'
  var githubApiUrl =
    'https://api.github.com/search/'
    +'issues?q=angular+angular.js+user:angular&sort=created&per_page=25';
  $http.get(githubApiUrl).success(function(gitIssues) {
    $scope.issues = gitIssues.items;
  })
}]);

