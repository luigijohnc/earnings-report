'use strict';

/**
 * @ngdoc function
 * @name earningsApp.controller:StagesCtrl
 * @description
 * # StagesCtrl
 * Controller of the earningsApp
 */
angular.module('earningsApp')
  .controller('StagesCtrl', function ($scope) {
    $scope.stageOneLists = [
    	{name:'Item 0', status: 1},
    	{name:'Item 1', status: 1},
    	{name:'Item 2', status: 0},
    	{name:'Item 3', status: 0},
    	{name:'Item 4', status: 1},
    	{name:'Item 5', status: 0},
    	{name:'Item 6', status: 0},
    	{name:'Item 7', status: 1}
    ];
    $scope.progress0 = 'bar-0'; 
    $scope.progress1 = 'bar-0';
    $scope.stageLink = 'views/stage-0.html';
    $scope.changeStageZero = function(stage){
    	$scope.stageLink = 'views/stage-' + stage + '.html';
    	$scope.changeBarZero = 'red-chart';
    	$scope.progress0 = 'bar-100';
    };
    $scope.refreshStageOne = function(){
    	$scope.stageLink = 'views/stage-1a.html';
    	$scope.progress1 = 'bar-0';
    }
    $scope.changeStageOne = function(stage, part){
    	$scope.stageLink = 'views/stage-' + stage + '.html';
    	$scope.changeBarOne = 'orange-chart';

    	switch(part){
    		case 'a':
    			$scope.progress1 = 'bar-30';
    			break;
			case 'b':
				$scope.progress1 = 'bar-70';
				break;
			case 'c':
				$scope.progress1 = 'bar-100';

    	}
    };
  });
