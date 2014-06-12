angular.module('haPrFlags').
controller('PrFlagsController', ['dataFetchService','$timeout',
  function(dataFetchService,$timeout) {
    var currentPromises;
    this.noLabels = 'This issue has no labels, learn more about triaging issues'+
            '<a ng-href="#questions/help-triage">here</a>.';
    this.getPrList = function(query) {
      //console.log(query)
      dataFetchService.fetchPR(query).then(function(gitHubResponse) {
        this.results = dataFetchService.mergeAndRemoveDuplicates(gitHubResponse.data);
      }.bind(this));
    };
    this.updateList = function(query) {
      $timeout.cancel(currentPromises);
      currentPromises = $timeout(function() {
        this.getPrList(query);
      }.bind(this),500)
    }
    this.getPrList("");
  }]);