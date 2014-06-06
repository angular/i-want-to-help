describe('haPrFlags', function() {
  var $controller, $scope, $httpBackend, $rootScope;

  beforeEach(module('haPrFlags'));
  beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_) {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  describe('PrFlagsController', function() {
    describe('github api call', function() {
      it('should get an object from github api with property items[]', function() {
        var githubApiUrl =
          'https://api.github.com/search/'
          +'issues?q=angular+angular.js+user:angular&sort=created&per_page=25';
        scope = $rootScope.$new();
        $httpBackend.expect('GET', githubApiUrl).respond({items: [{labels:[]}]});
        var ctrl = $controller('PrFlagsController',{$scope:scope});
        $httpBackend.flush();
        expect(scope.issues).toEqual([{labels:[]}]);
      });
    });
  });
});