angular.module('qaStore').
  service('qaStoreService', function() {
    var root, iWantToHelp;

    iWantToHelp = {
      url: 'i-want-to-help',
      backUrl: '/',
      choices: [null],
      question: 'I want to help other developers understand Angular.'
    };
    root = {
      url: '/',
      backUrl: null,
      choices: [iWantToHelp],
      question: null,
      root: true
    };

    this.questions_ = {
      null: root,
      'i-want-to-help': iWantToHelp
    };

    this.__defineSetter__('currentNode', function(node) {
      if(typeof node === 'string') {
        throw new Error('currentNode must be a node, got: string');
      }
      if(node && (node.root || !node.id && !node.parent)) {
        throw new Error('Current node must have properties: id, parent');
      }
      this._currentNode = node;
    });

    this.__defineGetter__('currentNode', function(node) {
      return this._currentNode;
    });

    this.getRoot = function() {
      return root;
    };

    this.getChoices = function(node) {
      if(!node) {
        throw new Error('Node must be valid, got: ' + node);
      }
      else if(!node.choices || !Array.isArray(node.choices)) {
        throw new Error('Node must have choices');
      }
      return node.choices;
    };

    this.getBackUrl = function(node) {
      if(!node) {
        throw new Error('Node must be valid, got: ' + node);
      }
      else if(node.root) {
        return;
      }
      return node.backUrl;
    };

    this.getByUrl = function(url) {
      if(typeof url !== 'string') {
        throw new Error('url must be of type string, got: ' + typeof url);
      }
      return this.questions_[url];
    }
    this._currentNode = root;
  });
