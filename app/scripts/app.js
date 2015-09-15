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
