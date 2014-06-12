describe('haPrFlags', function() {
  var $controller, mockDataFetchService;
  var url = 'https://api.github.com/repos/angular/angular.js/'
          +'issues?labels=PRs%20plz%21&sort=created';

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