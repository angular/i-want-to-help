angular.module('dataFetch').
  service('dataFetchService', ['$http', function($http) {
      this.fetchData = function(fetchFrom) {
        return $http.get(fetchFrom);
      };

      this.fetchTriage = function() {
        var triageUrl = 'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';
        return this.fetchData(triageUrl);
      };
  }]);