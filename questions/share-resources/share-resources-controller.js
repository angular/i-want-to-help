angular.module('haShareResources').
controller('ShareResourcesController', ['$filter', function($filter) {
  this.links = [
    { href: 'https://www.codeschool.com/courses/shaping-up-with-angular-js',
      name: 'Shaping Up with AngularJS',
      description: 'Code school course for Angular beginners',
      rating: 4,
      type: ['Tutorial', 'All']
    },
    { href: 'http://www.amazon.com/AngularJS-Brad-Green/dp/1449344852',
      name: 'AngularJS',
      description: 'Book by Brad Green and Shyam Seshadri',
      rating: 4,
      type: ['Book', 'All']
    },
    {
      href: 'https://www.youtube.com/user/angularjs',
      name: 'Angular on YouTube',
      description: 'Video presentations from Angular events',
      rating: 3,
      type: ['Video', 'All']
    },
    {
      href: 'https://egghead.io/',
      name: 'Bite-sized training with AngularJS',
      description: 'Short videos for learning angular',
      rating: 5,
      type: ['Video', 'All']
    },
    {
      href: 'http://www.amazon.com/Mastering-Web-Application-Development-AngularJS/dp/1782161821',
      name: 'Mastering Web Application Development with AngularJS',
      description: 'Book by Pawel Kozlowski and Peter Bacon Darwin',
      rating: 4,
      type: ['Book', 'All']
    },
    {
      href: 'http://www.amazon.com/AngularJS-Directives-Alex-Vanston/dp/1783280336',
      name: 'AngularJS Directives',
      description: 'Book by Alex Vanston',
      rating: 4,
      type: ['Book', 'All']
    },
    {
      href: 'http://www.amazon.co.uk/Recipes-Angular-js-Frederik-Dietz-ebook/dp/B00DK95V48',
      name: 'Recipes with Angular.js',
      description: 'Book by Frederik Dietz',
      rating: 4,
      type: ['Book', 'All']
    },
    {
      href: 'http://www.amazon.com/Developing-AngularJS-Edge-Christopher-Hiller-ebook/dp/B00CJLFF8K',
      name: 'Developing an AngularJS Edge',
      description: 'Book by Christopher Hiller and Troy Mott',
      rating: 4,
      type: ['Book', 'All']
    },
    {
      href: 'https://www.ng-book.com/',
      name: 'ng-book: The Complete Book on AngularJS',
      description: 'Book by Ari Learner',
      rating: 4,
      type: ['Book', 'All']
    },
    {
      href: 'http://stackoverflow.com/questions/tagged/angularjs',
      name: 'AngularJS on stackoverflow',
      description: 'Questions and answers about AngularJS',
      rating: 4,
      type: ['Forum', 'All']
    },
    {
      href: 'https://groups.google.com/forum/#!forum/angular',
      name: 'AngularJS Mailing List',
      description: 'Discussions on AngularJS',
      rating: 4,
      type: ['Forum', 'All']
    },
    {
      href: '//webchat.freenode.net/?channels=angularjs&uio=d4',
      name: 'AngularJS IRC channel',
      description: 'Forum on AngularJS',
      rating: 4,
      type: ['Forum', 'All']
    },
    {
      href: 'http://www.thinkster.io/',
      name: 'Thinkster IO AngularJS Tutorial',
      description: 'Online book and screencasts on making full single-page web apps',
      rating: 4,
      type: ['Tutorial', 'All']
    },
    {
      href: 'http://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1',
      name: 'Codeacademy tutorial',
      description: 'Online exercises tutorial',
      rating: 2,
      type: ['Tutorial', 'All']
    }
  ];
  var orderBy = $filter('orderBy');
  this.orderLinksRating = function(links, predicate) {
    return orderBy(links, predicate);
  };
  this.links = this.orderLinksRating(this.links, '-rating');
  this.types = ['All', 'Tutorial', 'Book', 'Video', 'Forum'];
}]);