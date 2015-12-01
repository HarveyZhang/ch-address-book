'use strict';

var addressBookServices = angular.module('addressBookServices', ['ngResource']);

// addressBookServices.constant('RESOURCE_URI', 'assets/contacts.json');

addressBookServices.factory('addressBook', ['$resource',
    function($resource) {
        var RESOURCE_URI = 'assets/contacts.json';

        return $resource(RESOURCE_URI);
    }]);

addressBookServices.factory('addressBookService', ['addressBook',
    function(addressBook) {
        var addressBooks = addressBook.get();
        return {
            get: function(/* userId */) {
                return addressBooks;
            },
            save: function() {
                console.log('TODO: save');
            }
        }
    }]);
