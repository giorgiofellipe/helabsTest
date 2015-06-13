'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$scope', '$location', '$translate', '$http', '$localstorage', function($scope, $location, $translate, $http, $localstorage) {
    $scope.isCollapsed = false;
    $scope.phases = [1,2,3,4,5];
    $scope.applicants = [];

    //request the applicants list
    $scope.getApplicants = function() {
      $http.get('applicants.json').then(function(result) {
        $scope.applicants = result.data;
      },
      function(result){
        console.log('Error on requesting the applicants');
      });
    };
    $scope.getApplicants();

    //verify if the menu link is the current path
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    //changes the language and store in localstorage
    $scope.changeLanguage = function (langKey) {
      $localstorage.set('language',langKey);
      $translate.use(langKey);
    };

    //watcher on switch button to verify what is the language choosen
    $scope.$watch(
      function($scope) {
        return $scope.choosenLanguage;
      },
      function() {
        if ($scope.choosenLanguage) {
          $scope.changeLanguage('pt_BR');
        } else {
          $scope.changeLanguage('en_US');
        }
      },
      true
    );

    //when the controller is instantiated for the first time verify on localStorage the saved language
    if ($localstorage.get('language') == 'pt_BR') {
      $scope.choosenLanguage = true;
    } else {
      $scope.choosenLanguage = false;
    }
}]);