'use strict';

describe('Address book services', function() {

    // load modules
    beforeEach(module('chApp'));

    // Test addressBook availability
    it('check the existence of addressBook factory', inject(function(addressBook) {
        expect(addressBook).toBeDefined();
    }));

    // Test addressBookService availability
    it('check the existence of addressBookService factory', inject(function(addressBookService) {
        expect(addressBookService).toBeDefined();
    }));
});