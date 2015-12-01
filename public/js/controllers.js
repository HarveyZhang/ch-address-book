'use strict';

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers
.controller('mainController', ['$scope', '$rootScope', 'addressBookService',
    function($scope, $rootScope, addressBookService) {
        var DEFAULT_TITLE = 'CH Address Book';

        $rootScope.title = DEFAULT_TITLE;
        $scope.loading = true;
        addressBookService.query().then(function(contacts) {
            $scope.contacts = contacts;
            $scope.loading = false;
        })

        $scope.entrySelected = function(userId) {
            $scope.selected = $scope.contacts[userId];
            $rootScope.title = DEFAULT_TITLE + ' - ' +
                $scope.selected.firstname + ' ' + $scope.selected.lastname;
        }
    }]);
