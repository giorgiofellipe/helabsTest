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
        scope.pageSize = 10;

        scope.shownItem = null;

        scope.filteredItems = $filter('filter')(scope.items, scope.search);
        scope.$watch(
          function(scope) {
            return scope.search;
          },
          function() {
            scope.filteredItems = $filter('filter')(scope.items, scope.search);
            console.log(scope.filteredItems)
          },
          true
        );

        scope.numberOfPages = function() {
          return Math.ceil(scope.filteredItems.length / scope.pageSize);
        };

        scope.previousPage = function () {
          if (scope.currentPage > 0) {
            scope.currentPage = scope.currentPage - 1;
          }
        };

        scope.nextPage = function () {
          if (scope.currentPage < scope.filteredItems.length / scope.pageSize - 1) {
            scope.currentPage = scope.currentPage + 1;
          }
        };

        scope.toggleShowItemOptions = function(item) {
          if (scope.isItemShown(item)) {
            scope.shownItem = null;
          } else {
            scope.shownItem = item;
          }
        };

        scope.isItemShown = function(item) {
          return scope.shownItem === item;
        };

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

        scope.filterByPhase = function(phase) {
          alert(phase);
        };
      }

    }
  }]);
