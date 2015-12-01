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
.factory('addressBookService', ['addressBook', '$q',
    function(addressBook, $q) {
        var contactCache;
        var model = addressBook.query(function(contacts) {
            var contactsMap = {};
            contacts = contacts || [];
            contacts.forEach(function(contact, index) {
                contact.id = index;
                contactsMap[index] = contact;
            });
            contactCache = contactsMap;
            return contactsMap;
        });
        return {
            query: function() {
                var deferred;
                if (contactCache) {
                    deferred = $q.defer();
                    deferred.resolve(contactCache);
                }
                return deferred ? deferred.promise : model.then(function(model) {
                    return model;
                });
            },
            get: function(userId) {
                var deferred;
                if (contactCache) {
                    deferred = $q.defer();
                    deferred.resolve(contactCache[userId]);
                }
                return deferred ? deferred.promise : model.then(function(model) {
                    return model[userId];
                });
            },
            save: function(userId, newContact) {
                // dummy save
                angular.extend(contactCache[userId], newContact);
            }
        }
    }]);
