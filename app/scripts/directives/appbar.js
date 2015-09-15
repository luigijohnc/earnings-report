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
