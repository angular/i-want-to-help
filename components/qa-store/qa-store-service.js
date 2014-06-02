angular.module('qaStore').
  service('qaStoreService', function() {
  	var questions = {
  		a: {
  			id: 'a',
  			parent: null, 
  			children: ['b', 'c', 'd'], 
  			question: null
  		}, 
  		b: {
  			id: 'b',
  			parent: 'a'
  		},
  		c: {
  			id: 'c',
  			parent: 'a'
  		},
  		d: {
  			id: 'd',
  			parent: 'a'
  		},
  	};

  	this.getRoot = function() {
  		return questions.a;
  	};

  	this.getChildren = function(parentNode){
  		if(!parentNode || !parentNode.children || !Array.isArray(parentNode.children)){
  		  throw new Error('Parent node must have children');
  		}
  		var children = [];
  		parentNode.children.forEach(function(id) {
        var child = questions[id];
        if(!child){
          throw new Error('Child does not exist for id: ' + id);   
        }
  			children.push(questions[id]);
  		})
  		return children;
  	};

  });
