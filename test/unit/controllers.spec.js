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

        it('should init state as { loading: true }', function() {
            expect(scope.state.loading).toBe(true);
        });

        it('should create "contacts" model with 1 contact', function() {
            expect(scope.contacts[0]).toBe(undefined);
            $httpBackend.flush();
            expect(scope.contacts[0].firstname).toBe('Cameron');
        });
    });

    // Test detailController functionality
    describe('detailController', function() {
        var scope, $rootScope, $controller;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            scope = $rootScope.$new();
            $controller('detailController', {$scope: scope});
        }));

        it('should init state as { loading: true, editing: false }', function() {
            expect(scope.state.loading).toBe(true);
            expect(scope.state.editing).toBe(false);
        });
    });
});