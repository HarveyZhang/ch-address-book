'use strict';

angular.module('addressBookControllers', [])
.controller('mainController', ['$scope', '$rootScope', 'addressBookService',
    function($scope, $rootScope, addressBookService) {
        var DEFAULT_TITLE = 'CH Address Book';

        $rootScope.title = DEFAULT_TITLE;
        $scope.state = {
            loading: true,
            editing: false
        };

        addressBookService.query().then(function(contacts) {
            $scope.contacts = contacts;
            $scope.state.loading = false;
        });

        $scope.entrySelected = function(userId) {
            $scope.selected = angular.extend({}, $scope.contacts[userId]);
            $rootScope.title = DEFAULT_TITLE + ' - ' +
                $scope.selected.firstname + ' ' + $scope.selected.lastname;
        };

        $scope.submit = function(form, newContact) {
            if (form.$valid) {
                angular.extend($scope.contacts[newContact.id], newContact);
                $scope.state.editing = false;
            }
        };

        $scope.reset = function(form, userId) {
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
            $scope.selected = angular.extend({}, $scope.contacts[userId]);
        }
    }]);
