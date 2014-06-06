describe('haPrFlags', function() {
  var $controller, mockDataFetchService;
  var url =
    'https://api.github.com/search/'
    + 'issues?q=angular+angular.js+user:angular&sort=created&per_page=25';

  beforeEach(module('haPrFlags'));
  beforeEach(inject(function(_$controller_, $injector, $q) {
    $controller = _$controller_;
    mockDataFetchService = {
      fetchPR: function() {
        return $q.when({data: {items: 'Resolve'}});
      }
    };
  }));

  describe('PrFlagsController', function() {
    describe('getPrList()', function() {
      it('should return a valid response object', inject(function($timeout) {
        var ctrl = $controller('PrFlagsController', {dataFetchService: mockDataFetchService});
        ctrl.getPrList();
        $timeout.flush();
        console.log('Result: ' + ctrl.result);
        expect(ctrl.results).toBe('Resolve');
      }));
    });
  });

  // afterEach(function() {
  //   $httpBackend.verifyNoOutstandingExpectation();
  //   $httpBackend.verifyNoOutstandingRequest();
  // });


  // describe('PrFlagsController', function() {
  //   describe('github api call', function() {
  //     it('should get an object from github api with property items[]', function() {
  //       var githubApiUrl =
  //         'https://api.github.com/search/'
  //         +'issues?q=angular+angular.js+user:angular&sort=created&per_page=25';
  //       scope = $rootScope.$new();
  //       $httpBackend.expect('GET', githubApiUrl).respond({items: [{labels:[]}]});
  //       var ctrl = $controller('PrFlagsController',{$scope:scope});
  //       $httpBackend.flush();
  //       expect(scope.issues).toEqual([{labels:[]}]);
  //     });
  //   });
  // });
});