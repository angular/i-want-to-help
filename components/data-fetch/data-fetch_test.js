describe('dataFetch', function(){
  var dataFetchService, $httpBackend;
  var url =
    'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';

  beforeEach(module('dataFetch'));
  beforeEach(inject(function(_dataFetchService_, $injector) {

    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', url).respond({data: 'data'});
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('dataFetchService', function() {
    describe('.fetchData()', function() {
      it('should retrieve data', function() {
        $httpBackend.expectGET(url);
        inject(function(_dataFetchService_) {
          dataFetchService = _dataFetchService_;
        })
        $httpBackend.flush();

      });
    })
  });
});