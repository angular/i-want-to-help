angular.module('haQuestions').
controller('QuestionsController', ['qaStoreService', '$routeParams', '$window',
    function(qaStoreService, $routeParams, $window) {
      var node = qaStoreService.getByUrl($routeParams.url);
      if(node === undefined) {
        $window.location.href = '#questions/i-want-to-help';
        node = qaStoreService.getByUrl('i-want-to-help');
      }
      qaStoreService.currentNode = node;
      this.currentNode = qaStoreService.currentNode;
      this.question = qaStoreService.currentNode.question;
      this.choices = qaStoreService.currentNode.choices;

      this.setCrumbsArray = function() {
        var baseCrumbs = [
          {
            url: '#questions/i-want-to-help',
            text: 'I want to help.'
          }
        ];

        if(qaStoreService.getRoot().url == this.currentNode.backUrl) {
          return baseCrumbs;
        }
        else if('i-want-to-help' == this.currentNode.backUrl) {
          baseCrumbs.push({
            url: '#questions/' + this.currentNode.url,
            text: this.currentNode.question
          });
          return baseCrumbs;
        }
      };

      this.crumbsArray = this.setCrumbsArray();
    }]);
