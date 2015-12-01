'use strict';

var chApp = angular.module('chApp', [
    'addressBookServices',
    'addressBookFilters'
]);

// var addressBookControllers = angular.module('addressBookControllers', []);

chApp
.controller('listController', ['$scope', '$rootScope', 'addressBookService',
    function($scope, $rootScope, addressBookService) {
        $rootScope.title = 'CH Address Book -- Haowei\'s Version';
        $scope.addressBook = addressBookService.get();
    }]);
