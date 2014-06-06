describe('haTriage', function() {
  var $controller, mockDataFetchService;
  var url =
    'https://api.github.com/search/issues?q=angular+angular.js+user:angular+no:milestone';
  beforeEach(module('haTriage', 'dataFetch'));
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  beforeEach(inject(function(_dataFetchService_, $injector, $q) {
    dataFetchService = _dataFetchService_;
    mockDataFetchService = {fetchTriage: function() {
          return $q.when({data: {items: 'Resolve'}});
        }};
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('triageController', function() {
    describe('getTriageList()', function() {
      it('should return a valid response object', inject(function($timeout) {
        var ctrl = $controller('TriageController', {dataFetchService: mockDataFetchService});
        ctrl.getTriageList();
        $timeout.flush();
        console.log('Result: ' + ctrl.result);
        expect(ctrl.results).toBe('Resolve');
      }));
    });
  });
});
