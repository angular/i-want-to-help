angular.module('haTriage').
controller('TriageController', ['dataFetchService', function(dataFetchService) {
  this.lastChangeTime = new Date().getTime();
  this.getTriageList = function(query) {
    dataFetchService.fetchTriage(query).then(function(gitHubResponse) {
      this.results = dataFetchService.mergeAndRemoveDuplicates(gitHubResponse.data.items);
    }.bind(this));
  };
  this.updateList = function(query) {
    var currentTime = new Date().getTime();
    if(currentTime-this.lastChangeTime>250) {
      this.getTriageList(query);
      this.lastChangeTime = new Date().getTime();
    }
  }
  this.getTriageList("");
}]);