'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$scope', '$location', '$translate', '$http', '$localstorage', function($scope, $location, $translate, $http, $localstorage) {
    $scope.isCollapsed = false;
    $scope.phases = [1,2,3,4,5];
    $scope.applicants = [];

    $scope.getApplicants = function() {
      $http.get('applicants.json').then(function(result) {
        $scope.applicants = result.data;
      },
      function(result){
        console.log('Error on requesting the applicants');
      });
    };
    $scope.getApplicants();

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.changeLanguage = function (langKey) {
      $localstorage.set('language',langKey);
      $translate.use(langKey);
    };

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

    if ($localstorage.get('language') == 'pt_BR') {
      $scope.choosenLanguage = true;
    } else {
      $scope.choosenLanguage = false;
    }
}]);