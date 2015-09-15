'use strict';

/**
 * @ngdoc function
 * @name earningsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the earningsApp
 */
angular.module('earningsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
