'use strict';

angular.module('addressBookServices', [])
.factory('addressBook', ['$http',
    function($http) {
        var RESOURCE_URI = 'assets/contacts.json';
        return {
            query: function(enhance) {
                return $http.get(RESOURCE_URI).then(function(result) {
                    var contacts = result.data.contacts;
                    if (enhance) {
                        contacts = enhance(contacts);
                    }
                    return contacts;
                });
            }
        };
    }])
.factory('addressBookService', ['addressBook',
    function(addressBook) {
        var model = addressBook.query(function(contacts) {
            var contactsMap = {};
            contacts.forEach(function(contact, index) {
                contact.id = index;
                contactsMap[index] = contact;
            });
            return contacts;
        });
        return {
            query: function() {
                return model.then(function(model) {
                    return model;
                });
            },
            get: function(userId) {
                return model.then(function(model) {
                    return model[userId];
                });
            },
            save: function() {
                console.log('TODO: save');
            }
        }
    }]);
