angular.module('haPrFlags').
controller('PrFlagsController', ['dataFetchService', function(dataFetchService) {
  this.noLabels = 'This issue has no labels, learn more about triaging issues'+
          '<a ng-href="#questions/help-triage">here</a>.';
  this.getPrList = function() {
    dataFetchService.fetchPR().then(function(gitHubResponse) {
      this.results = gitHubResponse.data.items;
    }.bind(this));
  };
  this.getPrList();
}]);


