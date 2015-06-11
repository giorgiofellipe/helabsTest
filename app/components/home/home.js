'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$scope', '$location', '$translate', '$http', function($scope, $location, $translate, $http) {
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

    //$scope.applicants = ;

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
    $scope.changeLanguage = function (langKey) {
        console.log(langKey);
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
}]);