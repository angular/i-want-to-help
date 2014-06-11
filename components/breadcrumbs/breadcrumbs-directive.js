angular.module('breadcrumbs').
directive('haBreadcrumbs', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/breadcrumbs/breadcrumbs.html',
    scope: {breadcrumbs: '='}
  };
});