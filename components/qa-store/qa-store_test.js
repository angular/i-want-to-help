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
      it('should return a single node', function(){
        var testNode = {
          parent: 'a'
        };
        expect(qaStoreService.getParent(testNode).id).toBe('a');
      });


      it('should return undefined for the root node', function(){
        var rootNode = qaStoreService.getRoot();
        expect(qaStoreService.getParent(rootNode)).toBe(undefined);
      });


      it('should throw if parent is not found', function(){
        var node = {
          parent : 'fakeId'
        };
        expect(function() {
          qaStoreService.getParent(node);
        }).toThrow('Parent does not exist for id: fakeId'); 
      });


      it('should throw if argument is undefined', function(){
        expect(function() {
          qaStoreService.getParent(undefined);
        }).toThrow('childNode must be a node, got: undefined'); 
      });
    });	
	});
});

