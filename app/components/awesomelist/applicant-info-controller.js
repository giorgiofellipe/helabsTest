angular.module('myApp.awesomelist.applicant-info-controller', ['ui.bootstrap'])
  .controller('ApplicantInfoCtrl', function ($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });