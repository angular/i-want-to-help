angular.module('haTriage').
controller('TriageController', ['dataFetchService','$timeout', function(dataFetchService,$timeout) {
  var currentPromises;
  this.getTriageList = function(query) {
    dataFetchService.fetchTriage(query).then(function(gitHubResponse) {
      this.results = dataFetchService.mergeAndRemoveDuplicates(gitHubResponse.data.items);
    }.bind(this));
  };
  this.updateList = function(query) {
      currentPromises.push($timeout(function() {
        this.getTriageList(query);
      }.bind(this),500))
      promsLen = currentPromises.length;
      $timeout.cancel(currentPromises[promsLen-2]);
      currentPromises.splice(0,promsLen-1);
    }
  this.getTriageList("");
}]);