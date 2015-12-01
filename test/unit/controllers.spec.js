'use strict';

describe('Address book controllers', function() {
    //load module
    beforeEach(module('chApp'));

    // Test mainController functionality
    describe('mainController', function() {
        var scope, $httpBackend, $rootScope, $controller;

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $httpBackend.expectGET('assets/contacts.json')
                .respond({'contacts': [{
                    'firstname':'Cameron',
                    'lastname':'Dubas',
                    'phone':'6047280012',
                    'address':'289 Abbott St., Vancouver, BC, V3M 2L7',
                    'email':'cameron@changeheroes.com'
                }]});
            scope = $rootScope.$new();
            $controller('mainController', {$scope: scope});
        }));

        it('should init state as { loading: true, editing: false }', function() {
            expect(scope.state).toBe({
                loading: true,
                editing: false
            });
        });

        it('should create "contacts" model with 1 contact via $http.get()', function() {
            expect(scope.contacts).toBe([]);
            $httpBackend.flush();
            expect(scope.contacts).toBe([{
                'firstname':'Cameron',
                'lastname':'Dubas',
                'phone':'6047280012',
                'address':'289 Abbott St., Vancouver, BC, V3M 2L7',
                'email':'cameron@changeheroes.com'
            }]);
        });
    });
});