'use strict';

var chApp = angular.module('chApp', [
    'ngRoute',
    'addressBookControllers'
]);

chApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/contacts', {
            templateUrl: 'index.html',
            controller: 'listController'
        }).
        otherwise({
            redirectTo: '/contacts'
        });
    }]);
