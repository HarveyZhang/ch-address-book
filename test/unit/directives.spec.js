describe('Address book directives', function() {
    var $scope, form;
    beforeEach(module('chApp'));
    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope;
        var element = angular.element(
            '<form name="form">' +
            '<input ng-model="model.phone" name="phone" valid-phone-number />' +
            '</form>'
        );
        $scope.model = { phone: '1234567890' };
        $compile(element)($scope);
        form = $scope.form;
    }));

    describe('validPhoneNumber', function() {
      it('should pass with valid 10-digit phone number', function() {
        form.phone.$setViewValue('1234567890');
        $scope.$digest();
        expect($scope.model.phone).toEqual('1234567890');
        expect(form.phone.$valid).toBe(true);
      });
      it('should not pass with other input', function() {
        form.phone.$setViewValue('1');
        $scope.$digest();
        expect($scope.model.phone).toBeUndefined();
        expect(form.phone.$valid).toBe(false);
      });
    });
});