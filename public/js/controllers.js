'use strict';

angular.module('addressBookControllers', [])
.controller('mainController', ['$scope', '$rootScope', 'addressBookService',
    function($scope, $rootScope, addressBookService) {
        var DEFAULT_TITLE = 'CH Address Book';

        $rootScope.title = DEFAULT_TITLE;
        $scope.state = {
            loading: true
        };
        $scope.contacts = {};

        addressBookService.query().then(function(contacts) {
            $scope.contacts = contacts;
            $scope.state.loading = false;
        });
    }])
.controller('detailController', ['$scope', '$routeParams', 'addressBookService',
    function($scope, $routeParams, addressBookService) {
        $scope.state = {
            loading: true,
            editing: false
        };

        addressBookService.get($routeParams.userId).then(function(contact) {
            $scope.selected = angular.extend({}, contact);
            $scope.state.loading = false;
        });

        $scope.submit = function(form, newContact) {
            if (form.$valid) {
                addressBookService.save(newContact.id, newContact);
                $scope.state.editing = false;
            }
        };
    }]);
