angular.module('haQuestions').
controller('QuestionsController', ['qaStoreService', '$routeParams', '$window',
    function(qaStoreService, $routeParams, $window) {
      var node = qaStoreService.getByUrl($routeParams.url);
      console.log(node);
      if(node === undefined){
        $window.location.href = '#questions/i-want-to-help';
        node = qaStoreService.getByUrl('i-want-to-help');
      }
      qaStoreService.currentNode = node;
      this.currentNode = qaStoreService.currentNode;
      this.question = qaStoreService.currentNode.question;
      this.choices = qaStoreService.currentNode.choices;
    }]);
