'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.awesomelist',
  'myApp.localstorage',
  'pascalprecht.translate',
  'toggle-switch'
])
.config(['$routeProvider', '$translateProvider', '$httpProvider', function($routeProvider, $translateProvider, $httpProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/components/home/home.html',
      controller: 'HomeCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
    $translateProvider.useStaticFilesLoader({
      prefix: '/languages/',
      suffix: '.json'
    });

    //http response wrapper to manage and treat responses
    $httpProvider.defaults.transformResponse.push(function(responseData){
      convertDateStringsToDates(responseData);
      return responseData;
    });

    var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    //hack to convert Date strings on JSON response to Date object
    function convertDateStringsToDates(input) {
      // Ignore things that aren't objects.
      if (typeof input !== "object") return input;

      for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        var match;
        // Check for string properties which look like dates.
        if (typeof value === "string" && (match = value.match(regexIso8601))) {
          var milliseconds = Date.parse(match[0]);
          if (!isNaN(milliseconds)) {
            input[key] = new Date(milliseconds);
          }
        } else if (typeof value === "object") {
          // Recurse into object
          convertDateStringsToDates(value);
        }
      }
    }
}])
.run(['$localstorage', '$translate', function($localstorage, $translate) {
    var language = $localstorage.get('language');
    if (!language) {
      $localstorage.set('language', 'en_US');
      language = $localstorage.get('language');
    }
    $translate.preferredLanguage(language);
}]);
