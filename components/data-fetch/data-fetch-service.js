angular.module('dataFetch').
  service('dataFetchService', ['$http', function($http) {
      var url =
        'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';

      $http.get(url).success(function(data) {
        console.log(data);
      });
  }]);