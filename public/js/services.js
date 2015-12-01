'use strict';

angular.module('addressBookServices', [])
// raw data source service
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
// the service that controllers actually work with
.factory('addressBookService', ['addressBook', '$q',
    function(addressBook, $q) {
        // cache processed data source for future use
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
            // query all contacts
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
            // get a particular contact
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
            // TODO: change save function when actually linked with a database
            save: function(userId, newContact) {
                // dummy save
                angular.extend(contactCache[userId], newContact);
            }
        }
    }]);
