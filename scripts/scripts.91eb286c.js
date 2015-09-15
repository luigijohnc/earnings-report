'use strict';

/**
 * @ngdoc overview
 * @name earningsApp
 * @description
 * # earningsApp
 *
 * Main module of the application.
 */
angular
    .module('earningsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'mainView': {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('cycle', {
                url: '/earnings_cycle',
                views: {
                    'mainView': {
                        templateUrl: 'views/earnings-cycle.html',
                        controller: 'EarningsCycleCtrl'
                    }
                }
            });
    });

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

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name earningsApp.directive:appbar
 * @description
 * # appbar
 */
angular.module('earningsApp')
    .directive('appbar', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $(element).sideNav();
            }
        };
    });

'use strict';

/**
 * @ngdoc function
 * @name earningsApp.controller:EarningsCycleCtrl
 * @description
 * # EarningsCycleCtrl
 * Controller of the earningsApp
 */
angular.module('earningsApp')
  .controller('EarningsCycleCtrl', function ($scope) {
    $scope.awesomeThings = [];
  });

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
