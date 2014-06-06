describe('dataFetch', function(){
  var dataFetchService, $httpBackend;
  var url =
    'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';
  var triageUrl =
    'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';

  beforeEach(module('dataFetch'));
  beforeEach(inject(function(_dataFetchService_, $injector) {
    dataFetchService = _dataFetchService_;
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('dataFetchService', function() {
    describe('.fetchData()', function() {
      it('should retrieve data from a specified url', function() {
          $httpBackend.expectGET(url);
        var dataReceived = dataFetchService.fetchData(url);
        $httpBackend.flush();
      });
    });

    describe('.fetchTriage()', function() {
      it('should retrieve data from the triage url', function() {
        $httpBackend.when('GET', triageUrl).respond({data: 'triage'});
        $httpBackend.expectGET(triageUrl);
        var dataReceived = dataFetchService.fetchTriage();
        $httpBackend.flush();
      });
    });
  });
});