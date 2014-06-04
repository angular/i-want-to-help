describe('qaStore', function() {
	var qaStoreService;

	beforeEach(module('qaStore'));
	beforeEach(inject(function(_qaStoreService_) {
		qaStoreService = _qaStoreService_;
	}));


	describe('qaStoreService', function() {
		describe('.getRoot()', function() {
			it('should have a get root method', function() {
				expect(typeof qaStoreService.getRoot).toBe('function');
			});


			it('should return a node with the proper root content', function() {
				var rootNode = qaStoreService.getRoot();
				expect(rootNode.choices.length).toBeGreaterThan(0);
				expect(rootNode.question).toBeNull();
        expect(rootNode.url).toBe('/');
			});
		});


    describe('.getChoices()', function() {
      it('should return an array of nodes', function() {
        var rootNode = qaStoreService.getRoot();
        var choices = qaStoreService.getChoices(rootNode);
        expect(Array.isArray(choices)).toBe(true);
      });


      it('should throw if node does not have a choices array', function() {
        var node = {
          choices: 'foo'
        };
        expect(function() {
          qaStoreService.getChoices(node);
        }).toThrow(new Error('Node must have choices'));
      });


      it('should throw if argument is undefined', function() {
        expect(function() {
          qaStoreService.getChoices(undefined);
        }).toThrow('Node must be valid, got: undefined');
      });
    });


    describe('.getBackUrl()', function() {
      it('should return a url as a string', function () {
        var testNode = {
          backUrl: 'a'
        };
        expect(qaStoreService.getBackUrl(testNode)).toBe('a');
      });


      it('should return undefined for the root node', function() {
        var rootNode = qaStoreService.getRoot();
        expect(qaStoreService.getBackUrl(rootNode)).toBe(undefined);
      });


      it('should throw if argument is undefined', function() {
        expect(function() {
          qaStoreService.getBackUrl(undefined);
        }).toThrow('Node must be valid, got: undefined');
      });


      it('should return a backUrl equal to parent\'s url', function() {
        var root = qaStoreService.getRoot();
        var second = qaStoreService.getChoices(root);
        var choice1 = second[0];
        var result = qaStoreService.getBackUrl(choice1);
        expect(root.url).toBe(result);
      });
    });

    describe('.getByUrl()', function() {
      it('should return a node for a given url', function() {
        var url = 'fake-url';
        var node = {};
        qaStoreService.questions_ = {'fake-url':node};
        expect(qaStoreService.getByUrl(url)).toBe(node);
      })

      it('should return undefined if a given url does not have a corresponding node', function(){
        expect(qaStoreService.getByUrl('fake-url')).toBeUndefined();
      })

      it('should throw if given url is not of type string', function() {
        expect(qaStoreService.getByUrl).
          toThrow(new Error('url must be of type string, got: undefined'));
      })
    })

    describe('.currentNode', function() {

      it('should be initialized with root as currentNode', function() {
        expect(qaStoreService.currentNode).toBe(qaStoreService.getRoot());
      })

      it('should set currentNode to provided node', function() {
        var node = {
          url: 'b',
          choices: [{}, {}],
          backUrl: 'a'
        };

        qaStoreService.currentNode = node;
        expect(qaStoreService._currentNode).toBe(node);
      });


      it('should throw if assigned a string', function() {
        expect(function() {
          qaStoreService.currentNode = 'a';
        }).toThrow('currentNode must be a node, got: string');
      });


      it('should throw if not node like', function() {
        var badNode = {
          size: 12
        };

        var goodNode = {
          url: 'b',
          backUrl: 'a'
        };

        expect(function() {
          qaStoreService.currentNode = badNode;
        }).toThrow('Current node must have properties: url, backUrl');

        expect(function() {
          qaStoreService.currentNode = goodNode;
        }).not.toThrow();
      });


      it('should accept null value', function() {
        qaStoreService.currentNode = null;
        expect(qaStoreService._currentNode).toBeNull();
      });


      it('should return the assigned value', function() {
        expect(qaStoreService.currentNode).toBe(qaStoreService.getRoot());
        var node = {
          id: 'b',
          parent: 'a'
        };
        qaStoreService._currentNode = node;
        expect(qaStoreService.currentNode).toBe(node);
      });
    });
	});
});

