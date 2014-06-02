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
        expect(qaStoreService.getChildren).toThrow(new Error('Parent node must have children'));
      });


      it('should throw if child does not exist for an id', function(){
        var node = {
          children : ['fakeId']
        };
        expect(function() { 
          qaStoreService.getChildren(node);
        }).toThrow('Child does not exist for id: fakeId');
      });
    })	
	});
});

