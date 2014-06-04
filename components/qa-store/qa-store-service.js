angular.module('qaStore').
  service('qaStoreService', function() {
    var root, iWantToHelp, helpOtherDevs, helpImproveAngular,
    helpMakeComponents, helpUpdateDocs, helpUpdateTutorial, helpShareResources,
    helpTriage, helpPRflags, helpSupportComponents, helpShareComponents;

    helpShareComponents = {
      url: 'help-support-components',
      backUrl: 'help-make-components',
      choices: [null],
      question: 'I can help to share components I have written.'
    };
    helpSupportComponents = {
      url: 'help-support-components',
      backUrl: 'help-make-components',
      choices: [null],
      question: 'I can help to support current components.'
    };
    helpPRflags = {
      url: 'help-pr-flags',
      backUrl: 'help-improve-angular',
      choices: [null],
      question: 'I can help with PR flags.'
    };
    helpTriage = {
      url: 'help-triage',
      backUrl: 'help-improve-angular',
      choices: [null],
      question: 'I can help triage issues.'
    };
    helpShareResources = {
      url: 'help-share-resources',
      backUrl: 'help-other-devs',
      choices: [null],
      question: 'I can help share resources that helped me understand Angular.'
    };
    helpUpdateTutorial = {
      url: 'help-update-tutorial',
      backUrl: 'help-other-devs',
      choices: [null],
      question: 'I can help update Angular\'s tutorial.'
    };
    helpUpdateDocs = {
      url: 'help-update-docs',
      backUrl: 'help-other-devs',
      choices: [null],
      question: 'I can help update Angular\'s documentation.'
    };
    helpMakeComponents = {
      url: 'help-make-components',
      backUrl: 'i-want-to-help',
      choices: [helpShareComponents, helpShareComponents],
      question: 'I want to help make components for Angular.'
    };
    helpImproveAngular = {
      url: 'help-improve-angular',
      backUrl: 'i-want-to-help',
      choices: [helpTriage, helpPRflags],
      question: 'I want to help improve Angular itself.'
    };
    helpOtherDevs = {
      url: 'help-other-devs',
      backUrl: 'i-want-to-help',
      choices: [helpUpdateDocs, helpUpdateTutorial, helpShareResources],
      question: 'I want to help other developers understand Angular.'
    };
    iWantToHelp = {
      url: 'i-want-to-help',
      backUrl: '/',
      choices: [helpOtherDevs, helpImproveAngular, helpMakeComponents],
      question: 'I want to help with Angular.'
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
      'i-want-to-help': iWantToHelp,
      'help-other-devs': helpOtherDevs,
      'help-improve-angular': helpImproveAngular,
      'help-make-components': helpMakeComponents,
      'help-update-docs': helpUpdateDocs,
      'help-update-tutorial': helpUpdateTutorial,
      'help-share-resources': helpShareResources,
      'help-triage': helpTriage,
      'help-pr-flags': helpPRflags,
      'help-support-components': helpSupportComponents,
      'help-share-components': helpShareComponents
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
