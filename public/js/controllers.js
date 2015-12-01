'use strict';

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers
.controller('mainController', ['$scope', '$rootScope', 'addressBookService',
    function($scope, $rootScope, addressBookService) {
        var DEFAULT_TITLE = 'CH Address Book';

        $rootScope.title = DEFAULT_TITLE;
        $scope.addressBook = addressBookService.get();

        $scope.entrySelected = function(index) {
            $scope.selected = $scope.addressBook.contacts[index];
            $rootScope.title = DEFAULT_TITLE + ' - ' +
                $scope.selected.firstname + ' ' + $scope.selected.lastname;
        }
    }]);
