angular.module('qaStore').
  service('qaStoreService', function() {
  	var questions = {
  		a: {
  			id: 'a',
  			parent: null, 
  			children: ['b', 'c', 'd'], 
  			question: null,
        root: true
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

    this.__defineSetter__('currentNode', function(node) {
      if(typeof node === 'string') {
        throw new Error('currentNode must be a node, got: string');
      }
      if(node && (!node.id || !node.parent)) {
        throw new Error('Current node must have properties: id, parent');
      }
      this._currentNode = node;
    });

    this.__defineGetter__('currentNode', function(node) {
      return this._currentNode;
    });

  	this.getRoot = function() {
  		return questions.a;
  	};

  	this.getChildren = function(parentNode){
  		if(!parentNode){
        throw new Error('parentNode must be a node, got: ' + parentNode);
      }
      else if(!parentNode.children || !Array.isArray(parentNode.children)){
  		  throw new Error('Parent node must have children');
  		}
  		var children = [];
  		parentNode.children.forEach(function(id) {
        var child = questions[id];
        if(!child){
          throw new Error('Child does not exist for id: ' + id);   
        }
  			children.push(questions[id]);
  		});
  		return children;
  	};

    this.getParent = function(childNode){
      if(!childNode){
        throw new Error('childNode must be a node, got: ' + childNode);
      }
      else if(childNode.root){
        return undefined;
      }
      else if(!questions[childNode.parent]){
        throw new Error('Parent does not exist for id: ' + childNode.parent); 
      }
      return questions[childNode.parent];
    };
  });
