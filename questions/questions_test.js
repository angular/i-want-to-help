describe('haQuestions', function() {
  var $controller;

  beforeEach(module('haQuestions', 'qaStore', 'ngRoute'));
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('questionsController', function() {
    describe('set node by url', function() {
      it('should set the current node according to the url', function() {
        var ctrl = $controller('QuestionsController', {$routeParams: {url: 'i-want-to-help'}});
        expect(ctrl.currentNode.url).toBe('i-want-to-help');
      });


      it('should redirect to the root if given url is not valid', function() {
        inject(function(_$window_) {
          $window = _$window_;
        });
        var badUrl = 'non-existent-url';
        var ctrl = $controller('QuestionsController', {$routeParams: {url: badUrl}});
        expect(ctrl.currentNode.url).toBe('i-want-to-help');
        expect('#'+($window.location.href).split('#')[1]).toBe('#questions/i-want-to-help');
      });
    });

    describe('crumbsArray()', function() {
      it('should set the crumbs array to one value for the initial question', function() {
        var ctrl = $controller('QuestionsController', {$routeParams: {url: 'i-want-to-help'}});
        ctrl.setCrumbsArray();
        expect(ctrl.crumbsArray.length).toBe(1);
      });


      it('should set the crumbs array to two values past the initial question', function() {
        var ctrl = $controller('QuestionsController', {$routeParams: {url: 'help-other-devs'}});
        ctrl.setCrumbsArray();
        expect(ctrl.crumbsArray.length).toBe(2);
      });
    });
  });
});
