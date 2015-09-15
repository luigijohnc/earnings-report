'use strict';

/**
 * @ngdoc function
 * @name earningsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earningsApp
 */
angular.module('earningsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
