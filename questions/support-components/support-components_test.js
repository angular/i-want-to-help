describe('haSupportComponents', function() {
  beforeEach(module('haSupportComponents','ngRoute'));
  describe('SupportComponentsController', function() {
    var $controller, ctrl;
    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
      ctrl = $controller('SupportComponentsController', {});
    }));


    it('should have componentCategories with correct properties', function() {
      var componentCategories = ctrl.componentCategories;
      expect(componentCategories[0].name).not.toBeUndefined();
      expect(Array.isArray(componentCategories[0].subComponentsCategories)).toBe(true);
    });

    describe('.currentComponent', function() {

      it('should set currentComponent to provided component', function() {
        //var component = {isComponent:true};
        var component = "componentUrl";
        ctrl.currentComponent = component;
        expect(ctrl.currentComponent).toEqual(component);
      });

      it('should throw if not an object', function() {
        expect(function() {
          ctrl.currentComponent = 'not an object';
        }).toThrow('currentComponent must be given a string, given: object');
      })
    });

    describe('.currentSubComponent', function() {

      it('should throw if not given a string', function() {
        expect(function() {
          ctrl.currentSubComponent = {isString:false};
        }).toThrow('currentSubComponent must be given a string, given: object');
      })

      it('should set currentSubComponent to provided subComponent by', function() {
        ctrl = $controller('SupportComponentsController',
          {$routeParams:{subComponenCat:'restful-services'}});
        ctrl.currentSubComponent = 'restful-services';
        expect(ctrl.currentSubComponent.name).toBe('RESTful Services');
      });

    });
  });

});