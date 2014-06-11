describe('breadcrumbs', function() {

  var $compile, $scope;

  beforeEach(module('components/breadcrumbs/breadcrumbs.html'));
  beforeEach(module('breadcrumbs'));

  beforeEach(inject(function(_$compile_, $rootScope){
    $compile =_$compile_;
    $scope = $rootScope.$new();
  }));

  describe('breadcrumbsDirective', function() {
    it('should display correct breadcrumbs for the page', function() {
      var element = $compile('<ha-breadcrumbs breadcrumbs="theseCrumbs"></ha-breadcrumbs>')($scope);
      $scope.theseCrumbs = [{url: 'firstUrl', text: 'first text'}];
      $scope.$digest();

      var crumbs = element.find('a');
      expect(crumbs.eq(0).text()).toBe('first text');
    });

    it('should set an active class on the last element', function() {
      var element = $compile('<ha-breadcrumbs breadcrumbs="theseCrumbs"></ha-breadcrumbs>')($scope);
      $scope.theseCrumbs = [
        {
          url: 'firstUrl',
          text: 'first text'
        },
        {
          url: 'secondUrl',
          text: 'second text'
        }
      ];

      $scope.$digest();

      var crumbs = element.find('a');
      expect(crumbs.eq(0).hasClass('active')).toBe(false);
      expect(crumbs.eq(1).hasClass('active')).toBe(true);
    });
  });
});