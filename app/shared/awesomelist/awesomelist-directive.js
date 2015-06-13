'use strict';

var scripts = document.getElementsByTagName("script");
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('myApp.awesomelist.awesomelist-directive', ['ui.bootstrap'])

  .directive('awesomelist', ['$modal', '$filter', function($modal, $filter) {
    return {
      restrict: 'E',
      templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'awesomelist.html',
      scope: {
        items: '='
      },
      link: function(scope, element, attrs) {
        scope.currentPage = 0;
        scope.pageSize = 5;
        scope.currentIsLast = false;

        scope.shownItem = null;

        scope.filteredItems = [];

        //watcher on items and search to fire the filter on every change made
        //this will update the pagination controls
        scope.$watch(
          function() {
            return [scope.items, scope.search];
          },
          function() {
            scope.currentPage = 0;
            scope.filteredItems = $filter('filter')(scope.items, scope.search);
          },
          true
        );

        scope.numberOfPages = function() {
          return Math.ceil(scope.filteredItems.length / scope.pageSize);
        };

        //navigates to the previous page, if there's one
        scope.previousPage = function () {
          if (scope.currentPage > 0) {
            scope.currentPage = scope.currentPage - 1;
          }
        };

        //navigates to the next page, if there's one
        scope.nextPage = function () {
          if (scope.currentPage < scope.filteredItems.length / scope.pageSize - 1) {
            scope.currentPage = scope.currentPage + 1;
          }
        };

        //open a modal with the applicant info
        scope.showMore = function(item) {
          $modal.open({
            animation: true,
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'applicant-info.html',
            controller: 'ApplicantInfoCtrl',
            resolve: {
              item: function () {
                return item;
              }
            }
          });
        };
      }

    }
  }]);
