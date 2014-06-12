angular.module('haTriage').
controller('TriageController', ['dataFetchService','$timeout', function(dataFetchService,$timeout) {
  var currentPromises;
  this.getTriageList = function(query) {
    dataFetchService.fetchTriage(query).then(function(gitHubResponse) {
      this.results = dataFetchService.mergeAndRemoveDuplicates(gitHubResponse.data.items);
    }.bind(this));
  };
  this.updateList = function(query) {
    $timeout.cancel(currentPromises);
    currentPromises = $timeout(function() {
      this.getTriageList(query);
    }.bind(this),500)
  }
  this.getTriageList("");
}]);
