describe('haSupportComponents', function() {
  beforeEach(module('haSupportComponents'));
  describe('SupportComponentsController', function() {
    var $controller, ctrl;
    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;
      ctrl = $controller('SupportComponentsController', {});
    }));


    it('should have componentCategories with correct properties', function() {
      var componentCategories = ctrl.componentCategories;
      expect(componentCategories[0].name).not.toBeUndefined();
      expect(Array.isArray(componentCategories[0].subComponentsCategories)).toBe(true);
    });


    ddescribe('.currentComponent', function() {

      it('should set currentComponent to provided component', function() {
        var component = {isComponent:true};
        ctrl.currentComponent = component;
        expect(ctrl.currentComponent).toEqual({isComponent:true});
      });

      it('should throw if not an object', function() {
        expect(function() {
          ctrl.currentComponent = 'not an object';
        }).toThrow('currentComponent must be set to an object; set to: string');
      })
    });
  });

});