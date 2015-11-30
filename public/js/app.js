'use strict';

var chApp = angular.module('chApp', [
    'ngRoute',
    'addressBookControllers'
]);

chApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'index.html',
                controller: 'addressBookCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);
