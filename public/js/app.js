'use strict';

angular.module('chApp', [
    'ngRoute',
    'addressBookControllers',
    'addressBookServices',
    'addressBookFilters',
    'addressBookDirectives'
])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/contacts/:userId', {
            templateUrl: '../partials/detail.html',
            controller: 'detailController'
        }).
        otherwise({
            redirectTo: '/'
        });

        // use HTML5 strategy if available
        $locationProvider.html5Mode(true);
    }]);
