angular.module('dataFetch').
  service('dataFetchService', ['$http', function($http) {
      this.prFetchData = {};
      this.fetchData = function(fetchFrom) {
        return $http.get(fetchFrom)
      };
      this.fetchTriage = function(query) {
        var triageUrl =
          'https://api.github.com/search/issues?q=angular+angular.js+no:milestone+user:angular+'
          +encodeURI(query);
        var triageResults = this.fetchData(triageUrl);
        return triageResults;
      };
      this.fetchPR = function(query) {
        var prUrl = 'https://api.github.com/search/'
          +'issues?labels=PRs%20plz%21&q=angular+'+encodeURI(query)+'&sort=created&per_page=25';
        console.log(prUrl)
        var prResults = this.fetchData(prUrl);
        return prResults;
      };
      this.mergeAndRemoveDuplicates = function(results) {
        results.forEach(function(result) {
          var uniqueId = result.html_url;
          this.prFetchData[uniqueId] = result;
        }.bind(this))
        var resultsToSend=[];
        for(key in this.prFetchData){
          resultsToSend.push(this.prFetchData[key])
        }
        return resultsToSend;
      }
  }]);
