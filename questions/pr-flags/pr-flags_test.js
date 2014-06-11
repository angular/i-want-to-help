describe('haPrFlags', function() {
  var $controller, mockDataFetchService;
  var url =
    'https://api.github.com/search/'
    + 'issues?q=angular+angular.js+user:angular&sort=created&per_page=25';

  beforeEach(module('haPrFlags'));
  beforeEach(inject(function(_$controller_, $injector, $q) {
    $controller = _$controller_;
    mockDataFetchService = {
      fetchPR: function(query) {
        return $q.when({data: {items: 'Resolve'}});
      },
      mergeAndRemoveDuplicates: function(result) {
        return "success";
      }
    };
  }));

  describe('PrFlagsController', function() {
    describe('getPrList()', function() {
      it('should return a valid response object', inject(function($timeout) {
        var ctrl = $controller('PrFlagsController', {dataFetchService: mockDataFetchService});
        ctrl.getPrList();
        $timeout.flush();
        expect(ctrl.results).toBe('success');
      }));
    });
  });
});