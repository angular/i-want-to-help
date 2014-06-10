angular.module('haPrFlags').
controller('PrFlagsController', ['dataFetchService','$timeout',
  function(dataFetchService,$timeout) {
    var currentPromises = [];
    this.noLabels = 'This issue has no labels, learn more about triaging issues'+
            '<a ng-href="#questions/help-triage">here</a>.';
    this.getPrList = function(query) {
      dataFetchService.fetchPR(query).then(function(gitHubResponse) {
        this.results = dataFetchService.mergeAndRemoveDuplicates(gitHubResponse.data.items);
      }.bind(this));
    };
    this.updateList = function(query) {
      currentPromises.push($timeout(function() {
        this.getPrList(query);
      }.bind(this),500))
      promsLen = currentPromises.length;
      $timeout.cancel(currentPromises[promsLen-2]);
      currentPromises.splice(0,promsLen-1);
    }
    this.getPrList("");
  }]);


// var currentTime = new Date().getTime();
//     if(currentTime-this.lastChangeTime>250) {
//       this.getPrList(query);
//       this.lastChangeTime = new Date().getTime();
//     }