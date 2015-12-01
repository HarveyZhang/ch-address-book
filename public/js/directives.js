'use strict';

angular.module('addressBookDirectives', [])
.directive('validPhoneNumber', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, controller) {
            controller.$validators.validPhoneNumber = function(modelValue) {
                // only checks if it's a 10-digit number string here
                return /^[0-9]{10}$/.test(modelValue);
            };
        }
    };
});