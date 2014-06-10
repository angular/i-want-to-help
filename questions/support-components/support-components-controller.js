angular.module('haSupportComponents').
controller('SupportComponentsController',['$routeParams', function($routeParams) {
  this.componentCategories = [
    {
      name: 'Complementary Libraries',
      haUrl: 'complementary-libraries',
      subComponentsCategories: [
      {
        name: 'Internationalization',
        haUrl: 'internationalization',
        subComponents: [
        {
          name: 'Angular-translate',
          url: 'http://angular-translate.github.io/',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,\
            blanditiis, itaque totam rerum iusto quidem earum repellendus perferendis ad pariatur\
            unde eaque ut nisi architecto reiciendis amet corrupti quaerat similique.',
        },
        {
          name: 'Angular-gettext',
          url: 'http://angular-gettext.rocketeer.be/',
          description: 'Ipsam, amet corporis veritatis rem facere consequatur possimus.\
            Et, nihil blanditiis doloribus velit repudiandae deleniti. Aut qui quod\
            officiis veritatis veniam fugiat.',
        }
        ]
      },
      {
        name: 'RESTful Services',
        haUrl: 'restful-services',
        subComponents: [
        {
          name: 'Restangular',
          url: 'https://github.com/mgonto/restangular',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, esse!',
        }
        ]
      },
      {
        name: 'SQL and NoSQL Backends',
        haUrl: 'sql-and-nosql',
        subComponents: [
        {
          name: 'BreezeJS',
          url: 'http://www.breezejs.com/',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,\
          tempore, voluptate ex quisquam soluta nihil ullam quidem quaerat odio labore!',
        },
        {
          name: 'AngularFire',
          url: 'http://angularfire.com/',
          description: 'Lorem ipsum dolor sit.',
        }
        ]
      },
      {
        name: 'UI Widgets',
        haUrl: 'ui-widgets',
        subComponents: [
        {
          name: 'KendoUI',
          url: 'http://kendo-labs.github.io/angular-kendo/#/',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam.',
        },
        {
          name: 'UI Bootstrap',
          url: 'http://angular-ui.github.io/bootstrap/',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae\
          quae assumenda natus.',
        },
        {
          name: 'Wijmo',
          url: 'http://wijmo.com/tag/angularjs-2/',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
        ]
      },
      {
        name: 'Advanced Routing',
        haUrl: 'advanced-routing',
        subComponents: [
        {
          name: 'UI-Router',
          url: 'https://github.com/angular-ui/ui-router',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, nobis,\
            temporibus, nostrum eveniet tempora rerum veritatis alias cupiditate quidem at\
            voluptates quaerat quibusdam!',
        }
        ]
      }
      ]
    },
    {
      name: 'Tools',
      haUrl: 'tools',
      subComponentsCategories: [
        {
          name: 'Debugging',
          haUrl: 'debugging',
          subComponents: [
          {
            name: 'Batarang',
            url: 'https://github.com/angular/angularjs-batarang',
            description: 'Lorem ipsum dolor sit amet.'
          }
          ]
        },
        {
          name: 'Testing',
          haUrl: 'testing',
          subComponents: [
            {
              name: 'Karma',
              url: 'http://karma-runner.github.io/',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
              Vel, nobis deserunt!',
            },
            {
              name: 'Protractor',
              url: 'https://github.com/angular/protractor',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            }
          ]
        },
        {
          name: 'Workflow',
          haUrl: 'workflow',
          subComponents: [
            {
              name: 'Yeoman.io',
              url: 'https://github.com/yeoman/generator-angular',
              description: 'Lorem ipsum dolor sit.',
            }
          ]
        }
      ]
    }
  ]

  this.__defineSetter__('currentComponent', function(componentUrl) {
    if(typeof componentUrl !== "string"){
      throw new Error('currentComponent must be given a string, given: '+ typeof componentUrl)
    }
    var url = $routeParams.componentCat || componentUrl;
    this.componentCategories.forEach(function(comp) {
      if (comp.haUrl == url){
        this._currentComponent = comp;
      }
    }.bind(this))
  });

  this.__defineGetter__('currentComponent', function() {
    return this._currentComponent;
  })

  var _currentSubComponent;

  this.__defineSetter__('currentSubComponent', function(componentUrl) {
    if(typeof componentUrl !== "string"){
      throw new Error("currentSubComponent must be given a string, given: "+ typeof componentUrl)
    }

    this._currentComponent.subComponentsCategories.forEach(function(subComp) {
      if (subComp.haUrl == componentUrl){
        _currentSubComponent = subComp;
      }
    }.bind(this))
  });

  this.__defineGetter__('currentSubComponent', function() {
    return _currentSubComponent;
  })

  this.currentComponent = $routeParams.componentCat || this.componentCategories[0].haUrl;

  this.currentSubComponent =
    $routeParams.subComponentCat || this._currentComponent.subComponentsCategories[0].haUrl;

}])






