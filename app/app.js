'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.awesomelist',
  'myApp.localstorage',
  'pascalprecht.translate',
  'toggle-switch'
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
}])
.run(['$localstorage', '$translate', function($localstorage, $translate) {
    var language = $localstorage.get('language');
    console.log(language);
    //if (!language) {
    //  $localstorage.set('language', 'en_US');
    //  language = $localstorage.get('language');
    //}
    console.log(language);
    $translate.preferredLanguage(language);
}]);
