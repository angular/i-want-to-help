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
	});
});

