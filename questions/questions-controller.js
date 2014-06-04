angular.module('haQuestions').
controller('QuestionsController', ['qaStoreService', function(qaStoreService) {
  this.question = qaStoreService.currentNode.question;
  this.choices = qaStoreService.currentNode.choices;

}])
