'use strict';

angular.module('chApp', [
    'addressBookControllers',
    'addressBookServices',
    'addressBookFilters'
]);

// chApp.config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/contacts', {
//             templateUrl: 'index.html',
//             controller: 'listController'
//         }).
//         otherwise({
//             redirectTo: '/contacts'
//         });
//     }]);
