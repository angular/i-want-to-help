describe('qaStore', function() {
	var qaStoreService;

	beforeEach(module('qaStore'));
	beforeEach(inject(function(_qaStoreService_){
		qaStoreService = _qaStoreService_;
	}));


	describe('qaStoreService', function() {			
		describe('.getRoot()', function() {
			it('should have a get root method', function() {
				expect(typeof qaStoreService.getRoot).toBe('function');
			});


			it('should return a node with the proper root content', function(){
				var rootNode = qaStoreService.getRoot();
				expect(rootNode.children.length).toBeGreaterThan(0);
				expect(rootNode.question).toBe(null);
			});
		});


    describe('.getChildren()', function(){
      it('should return an array of nodes', function(){
        var rootNode = qaStoreService.getRoot();
        var children = qaStoreService.getChildren(rootNode);
        expect(Array.isArray(children)).toBe(true);
        expect(children[0].parent).toBe('a');
        expect(children[1].parent).toBe('a');
        expect(children[2].parent).toBe('a');
      });


      it('should throw if parent node does not have a children array', function(){
        var node = {
          children: 'foo'
        };
        expect(function() {
          qaStoreService.getChildren(node);
        }).toThrow(new Error('Parent node must have children'));
      });


      it('should throw if argument is undefined', function(){
        expect(function() {
          qaStoreService.getChildren(undefined);
        }).toThrow('parentNode must be a node, got: undefined'); 
      });


      it('should throw if child does not exist for an id', function(){
        var node = {
          children : ['fakeId']
        };
        expect(function() { 
          qaStoreService.getChildren(node);
        }).toThrow('Child does not exist for id: fakeId');
      });
    });


    describe('.getParent()', function(){
      it('should return a single node', function (){
        var testNode = {
          parent: 'a'
        };
        expect(qaStoreService.getParent(testNode).id).toBe('a');
      });


      it('should return undefined for the root node', function() {
        var rootNode = qaStoreService.getRoot();
        expect(qaStoreService.getParent(rootNode)).toBe(undefined);
      });


      it('should throw if parent is not found', function() {
        var node = {
          parent : 'fakeId'
        };
        expect(function() {
          qaStoreService.getParent(node);
        }).toThrow('Parent does not exist for id: fakeId'); 
      });


      it('should throw if argument is undefined', function() {
        expect(function() {
          qaStoreService.getParent(undefined);
        }).toThrow('childNode must be a node, got: undefined'); 
      });
    });


    describe('.currentNode', function(){
      it('should be undefined by default', function() {
        expect(qaStoreService.currentNode).toBeUndefined();
      });


      it('should set currentNode to provided node', function() {
        var node = {
          id: 'b',
          children: ['e', 'f'],
          parent: 'a' 
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
          id: 'b',
          parent: 'a'
        };

        expect(function() {
          qaStoreService.currentNode = badNode;
        }).toThrow('Current node must have properties: id, parent');

        expect(function() {
          qaStoreService.currentNode = goodNode;
        }).not.toThrow();
      });


      it('should accept null value', function() {
        qaStoreService.currentNode = null;
        expect(qaStoreService._currentNode).toBeNull();
      });


      it('should return the assigned value', function() {
        expect(qaStoreService.currentNode).toBeUndefined();
        var node = {
          id: 'b',
          parent: 'a'
        };
        qaStoreService._currentNode = node;
        expect(qaStoreService.currentNode).toBe(node);
      });

    });

    //describe('.getCurrentNode()', function(){
    //   it('should return ')
    // });	
	});
});

