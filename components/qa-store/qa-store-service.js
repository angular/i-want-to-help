angular.module('qaStore').
  service('qaStoreService', function() {
  	var questions = {
  		a: {
  			parent: null, 
  			children: ['b', 'c'], 
  			question: null
  		}, 
  		b: {}
  	};

  	this.getRoot = function() {
  		return questions.a;
  	};
  });
