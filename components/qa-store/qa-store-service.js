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
  			parent: 'a',
        children: ['e', 'f', 'g'],
        question: 'I want to help other developers understand Angular.'
  		},
  		c: {
  			id: 'c',
  			parent: 'a',
        children: ['h', 'i'],
        question: 'I want to help improve Angular itself.'
  		},
  		d: {
  			id: 'd',
  			parent: 'a',
        children: ['j', 'k'],
        question: 'I want to help make components for Angular.'
  		},
      e: {
        id: 'e',
        parent: 'b',
        question: 'I can help update Angular\'s documentation.'
      },
      f: {
        id: 'f',
        parent: 'b',
        question: 'I can share resources that helped me understand Angular.'
      },
      g: {
        id: 'g',
        parent: 'b',
        question: 'I can help update Angular\'s tutorial.'
      },
      h: {
        id: 'h',
        parent: 'c',
        question: 'I can help respond to PR flags.'
      },
      i: {
        id: 'i',
        parent: 'c',
        question: 'I can help triage issues.'
      },
      j: {
        id: 'j',
        parent: 'd',
        question: 'I can help triage issues.'
      },
      k: {
        id: 'k',
        parent: 'd',
        question: 'I can help improve support for current components.'
      }
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

  	this.getChildren = function(parentNode) {
  		if(!parentNode) {
        throw new Error('parentNode must be a node, got: ' + parentNode);
      }
      else if(!parentNode.children || !Array.isArray(parentNode.children)) {
  		  throw new Error('Parent node must have children');
  		}
  		var children = [];
  		parentNode.children.forEach(function(id) {
        var child = questions[id];
        if(!child) {
          throw new Error('Child does not exist for id: ' + id);
        }
  			children.push(questions[id]);
  		});
  		return children;
  	};

    this.getParent = function(childNode) {
      if(!childNode) {
        throw new Error('childNode must be a node, got: ' + childNode);
      }
      else if(childNode.root) {
        return undefined;
      }
      else if(!questions[childNode.parent]) {
        throw new Error('Parent does not exist for id: ' + childNode.parent);
      }
      return questions[childNode.parent];
    };
  });
