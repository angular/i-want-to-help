angular.module('haTriage').
controller('TriageController', ['dataFetchService', function(dataFetchService) {
  this.getTriageList = function() {
    dataFetchService.fetchTriage().then(function(gitHubResponse) {
      this.results = gitHubResponse.data.items;
    }.bind(this));
  };
  this.getTriageList();
}]);