'use strict';

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers.controller('addressBookCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.title = 'CH Address Book -- Haowei\'s Version';
    }]);
