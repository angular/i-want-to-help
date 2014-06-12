describe('dataFetch', function(){
  var dataFetchService, $httpBackend;
  var url =
    'https://api.github.com/search/issues?q=angular+angular.js+no:milestone+user:angular+';
  var triageUrl =
    'https://api.github.com/search/issues?q=angular+angular.js+no:milestone+user:angular+';
  var pRUrl = 'https://api.github.com/repos/angular/angular.js/'
          +'issues?labels=PRs%20plz%21&sort=created';;

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
        var dataReceived = dataFetchService.fetchTriage('');
        $httpBackend.flush();
      });
    });

    describe('.fetchPR()', function() {
      it('should retrieve data from the PR url', function() {
        $httpBackend.when('GET', pRUrl).respond({data: 'triage'});
        $httpBackend.expectGET(pRUrl);
        var dataReceived = dataFetchService.fetchPR('');
        $httpBackend.flush();
      });
    });

    describe('.mergeAndRemoveDuplicates', function() {
      it('return a merged array with no duplicates', function() {
        dataFetchService.prFetchData = {
          b: {html_url:'b'},
          d: {html_url:'d'}
        }
        var objToMerge = [{html_url: 'a'}, {html_url:'b'}, {html_url:'c'}];
        var finalObj = [{html_url:'b'},{html_url:'d'},{html_url:'a'},{html_url:'c'}];
        var result = dataFetchService.mergeAndRemoveDuplicates(objToMerge);
        expect(result).toEqual(finalObj)
      })
    })
  });
});