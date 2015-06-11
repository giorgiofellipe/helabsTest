'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.awesomelist',
  'pascalprecht.translate'
])
.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/components/home/home.html',
      controller: 'HomeCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
    $translateProvider.useStaticFilesLoader({
      prefix: '/languages/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('pt_BR');
}]);
