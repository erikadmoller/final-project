describe('registerCtrl', function() {

    var $scope;
    var RegisterCtrl;
    var Validate;

    beforeEach(module('basic.controllers'));

    beforeEach(inject(function($rootScope, $controller, $injector) {
        $scope = $rootScope.$new();
        RegisterCtrl = $controller('registerCtrl', {$scope: $scope});
    }));

    // it('should require a password', function() {
    //     $scope.user({});
    //     expect($scope.error.identifier).to.not.equal('');
    // });

    it('should show error if email is missing', function() {
        $scope.registerSubmit({email: '', password: 'password123'});
        expect($scope.error.email).to.equal('Enter your email address');
    });
});