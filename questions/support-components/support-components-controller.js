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
          description: 'Angular-translate is an AngularJS module that makes your life much easier \
            when it comes to i18n and l10n including lazy loading and pluralization. It provides \
            components like filters and directives, asynchronous loading of i18n data, full \
            pluralization support through MessageFormat and more. Angular-translate is very \
            flexible. You can build your own loaders, storages or error handlers and extend \
            Angular-translate to your needs.',
        },
        {
          name: 'Angular-gettext',
          url: 'http://angular-gettext.rocketeer.be/',
          description: 'Angular-gettext let\'s you focus on developing your application. Just write\
             everything in English and annotate which parts should be translated. The tools do the\
             rest. Translating your application doesn\'t mean you have to give up any of the good\
             stuff that AngularJS provieds. Interpolation and everything else we love are used\
             to just keep on working.',
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
          description: 'Restangular is an AngularJS service hat simplifies common GET, DELETE, and \
            UPDATE requests with a minimum of client code. It\'s a perfect fit for any WebApp that \
            consumes data from a RESTful API.',
        }
        ]
      },
      {
        name: 'SQL and NoSQL',
        haUrl: 'sql-and-nosql',
        subComponents: [
        {
          name: 'BreezeJS',
          url: 'http://www.breezejs.com/',
          description: 'Breeze is a JavaScript library that helps you manage data in rich client \
          applications. If you store data in a database, query and save those data as complex \
          object graphs, and share these graphs across multiple screens of your JavaScript client, \
          Breeze is for you.',
        },
        {
          name: 'AngularFire',
          url: 'http://angularfire.com/',
          description: 'When data changes, apps built with Firebase update instantly across every \
          device -- web or mobile. Firebase-powered apps work offline. Data is synchronized \
          instantly when your app regains connectivity. Firebase has full-featured libraries for \
          all major web and mobile platforms and bindings for the most popular frameworks. Need \
          something special? Don\'t worry, their REST API has you covered.',
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
          description: 'Kendo UI is a comprehensive HTML5/JavaScript framework for modern web and \
          mobile app development. It contains many widgets for web, a core framework, a mobile \
          suite, and a complete Data Visualization solution. The Angular Kendo project aims to \
          provide deep integration between Kendo UI Web/DataViz and AngularJS.',
        },
        {
          name: 'UI Bootstrap',
          url: 'http://angular-ui.github.io/bootstrap/',
          description: 'This repository contains a set of native AngularJS directives based on \
          Bootstrap\'s markup and CSS. As a result no dependency on jQuery or Bootstrap\'s \
          JavaScript is required.',
        },
        {
          name: 'Wijmo',
          url: 'http://wijmo.com/tag/angularjs-2/',
          description: 'Wijmo is a complete suite of UI Controls for mobile and web application \
          development. Built with HTML5, jQuery, CSS3, and SVG, Wijmo widgets make your \
          applications suitable for Today’s Web.'
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
          description: 'AngularUI Router is a routing framework for AngularJS, which allows you to \
          organize the parts of your interface into a state machine. Unlike the $route service in \
          the Angular ngRoute module, which is organized around URL routes, UI-Router is organized \
          around states, which may optionally have routes, as well as other behavior, attached.',
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
            description: 'Extends the Developer Tools, adding tools for debugging and profiling \
            AngularJS applications.'
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
              description: 'The main goal for Karma is to bring a productive testing environment to \
              developers. The environment being one where they don\'t have to set up loads of \
              configurations, but rather a place where developers can just write the code and get \
              instant feedback from their tests. Because getting quick feedback is what makes you \
              productive and creative.',
            },
            {
              name: 'Protractor',
              url: 'https://github.com/angular/protractor',
              description: 'Protractor is an end to end test framework for AngularJS applications \
              built on top of WebDriverJS. Protractor runs tests against your application running \
              in a real browser, interacting with it as a user would. Protractor can be run as a \
              standalone binary, or included into your tests as a library. Use Protractor as a \
              library if you would like to manage WebDriver and your test setup yourself.',
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
              description: 'Yeoman helps you kickstart new projects, prescribing best practices \
              and tools to help you stay productive. To do so, we provide a generator ecosystem. A \
              generator is basically a plugin that can be runned with the `yo` command to scaffold \
              complete projects or useful parts. Through our official Generators, we promote the \
              "Yeoman workflow". This workflow is a robust and opinionated client-side stack, \
              comprising tools and frameworks that can help developers quickly build beautiful web \
              applications.',
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






