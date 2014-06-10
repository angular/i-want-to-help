angular.module('haPrFlags').
controller('PrFlagsController', ['dataFetchService', function(dataFetchService) {
  this.lastChangeTime = new Date().getTime();
  this.noLabels = 'This issue has no labels, learn more about triaging issues'+
          '<a ng-href="#questions/help-triage">here</a>.';
  this.getPrList = function(query) {
    console.log("requesting results");
    dataFetchService.fetchPR(query).then(function(gitHubResponse) {
      this.results = dataFetchService.mergeAndRemoveDuplicates(gitHubResponse.data.items);
    }.bind(this));
  };
  this.updateList = function(query) {
    var currentTime = new Date().getTime();
    if(currentTime-this.lastChangeTime>50) {
      this.getPrList(query);
      this.lastChangeTime = new Date().getTime();
    }
  }
  this.getPrList("");
}]);


