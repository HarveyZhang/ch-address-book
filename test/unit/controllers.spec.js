'use strict';

describe('Address book controllers', function() {
    beforeEach(module('chApp'));
    beforeEach(module('addressBookService'));

    describe('mainController', function() {
        var scope, $http;

        beforeEach(inject(function(_$http_, $rootScope, $controller) {
            $http = _$http_;
            $http.expectGET('assets/contacts.json')
                .respond({'contacts': [{
                    'firstname':'Cameron',
                    'lastname':'Dubas',
                    'phone':'6047280012',
                    'address':'289 Abbott St., Vancouver, BC, V3M 2L7',
                    'email':'cameron@changeheroes.com'
                }]});
            scope = $rootScope.$new();
            $controller('mainController', {$scope: scope});
        }))

        it('should create "contacts" model with 1 contact via $http.get()', function() {
            expect(scope.contacts).toEqualData(undefined);
            $http.flush()
            expect(scope.contacts).toEqualData([{
                'firstname':'Cameron',
                'lastname':'Dubas',
                'phone':'6047280012',
                'address':'289 Abbott St., Vancouver, BC, V3M 2L7',
                'email':'cameron@changeheroes.com'
            }]);
        });
    })
});