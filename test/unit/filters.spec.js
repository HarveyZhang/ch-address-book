'use strict';

describe('Address book filters', function() {

    beforeEach(module('addressBookFilters'));


    describe('locale', function() {
        it('should translate according to locale', inject(function(localeFilter) {
            expect(localeFilter('word')).toBe('word');
        }));
    });

    describe('phoneNumber', function() {
        it('should translate according to phoneNumber', inject(function(phoneNumberFilter) {
            expect(phoneNumberFilter('1234567890')).toBe('(123) 456-7890');
        }));
    });
});