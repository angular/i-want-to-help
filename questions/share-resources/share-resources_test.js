describe('haShareResources', function() {
  var $controller;

  beforeEach(module('haShareResources'));
  beforeEach(inject(function(_$controller_, _$filter_) {
    $controller = _$controller_;
    $filter = _$filter_;
  }));

  describe('shareResourcesController', function() {
    describe('orderLinksRating()', function() {
      it('should order links by descending rating value', function() {
        var arr = [{rating: 2}, {rating: 3}];
        var ctrl = $controller('ShareResourcesController', {$filter : $filter});
        ctrl.links_ = arr;
        var result = ctrl.orderLinksRating(ctrl.links_, '-rating');
        expect(result[0].rating).toBe(3);
      });
    });
  });
})