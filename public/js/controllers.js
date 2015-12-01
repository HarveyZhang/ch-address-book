'use strict';

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers
.controller('listController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.title = 'CH Address Book -- Haowei\'s Version';
    }])
.controller('detailController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.title = 'lala';
    }]);
