describe('dataFetch', function(){
  var dataFetchService, $httpBackend;
  var url =
    'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';
  var triageUrl =
    'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';
  var pRUrl = 'https://api.github.com/search/'
        + 'issues?q=angular+angular.js+user:angular&sort=created&per_page=25';

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
        $httpBackend.when('GET', '/test').respond({data: 'correct'});
        $httpBackend.expectGET('/test');
        var dataReceived = dataFetchService.fetchData('/test');
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

    describe('.fetchPR()', function() {
      it('should retrieve data from the PR url', function() {
        $httpBackend.when('GET', pRUrl).respond({data: 'triage'});
        $httpBackend.expectGET(pRUrl);
        var dataReceived = dataFetchService.fetchPR();
        $httpBackend.flush();
      });
    });
  });
});