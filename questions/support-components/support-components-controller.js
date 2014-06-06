angular.module('haSupportComponents').
controller('SupportComponentsController',[function() {
  this.componentCategories_ = [
    {
      name: 'Complementary Libraries',
      subComponentsCategories: [
      {
        name: 'Internationalization - i18n',
        subComponents: [
        {
          name: 'angular-translate',
          url: 'http://angular-translate.github.io/',
          description: '',
        },
        {
          name: 'angular-gettext',
          url: 'http://angular-gettext.rocketeer.be/',
          description: '',
        }
        ]
      },
      {
        name: 'RESTful Services',
        subComponents: [
        {
          name: 'Restangular',
          url: 'https://github.com/mgonto/restangular',
          description: '',
        }
        ]
      },
      {
        name: 'SQL and NoSQL Backends',
        subComponents: [
        {
          name: 'BreezeJS',
          url: 'http://www.breezejs.com/',
          description: '',
        },
        {
          name: 'AngularFire',
          url: 'http://angularfire.com/',
          description: '',
        }
        ]
      },
      {
        name: 'UI Widgets',
        subComponents: [
        {
          name: 'KendoUI',
          url: 'http://kendo-labs.github.io/angular-kendo/#/',
          description: '',
        },
        {
          name: 'UI Bootstrap',
          url: 'http://angular-ui.github.io/bootstrap/',
          description: '',
        },
        {
          name: 'Wijmo',
          url: 'http://wijmo.com/tag/angularjs-2/',
          description: ''
        }
        ]
      },
      {
        name: 'Advanced Routing',
        subComponents: [
        {
          name: 'UI-Router',
          url: 'https://github.com/angular-ui/ui-router',
          description: '',
        }
        ]
      }
      ]
    },
    {
      name: 'Tools',
      subComponentsCategories: [
        {
          name: 'Debugging',
          subComponents: [
          {
            name: 'Batarang',
            url: 'https://github.com/angular/angularjs-batarang',
            description: ''
          }
          ]
        },
        {
          name: 'Testing',
          subComponents: [
            {
              name: 'Karma',
              url: 'http://karma-runner.github.io/',
              description: '',
            },
            {
              name: 'Protractor',
              url: 'https://github.com/angular/protractor',
              description: '',
            }
          ]
        },
        {
          name: 'Workflow',
          subComponents: [
            {
              name: 'Yeoman.io',
              url: 'https://github.com/yeoman/generator-angular',
              description: '',
            }
          ]
        }
      ]
    }
  ]

  this.__defineSetter__('currentComponent', function(component) {
    if(typeof component !== "object"){
      throw new Error("currentComponent must be set to an object; set to: "+ typeof component)
    }
    this._currentComponent = component;
  });

  this.__defineGetter__('currentComponent', function() {
    return this._currentComponent;
  })

  this._currentComponent = this.componentCategories_[0];
}])









