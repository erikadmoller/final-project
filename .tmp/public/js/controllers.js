angular.module('basic.controllers', ['basic.services'])
.controller('registerCtrl', function($scope, $http, $state) {

	$scope.user = {
		username: '',
		password: '',
		name: '',
		street: '',
		apt: '',
		city: '',
		state: '',
		zipcode: '',
		phone: '',
		email: '',
		ssn: ''
	}

	$scope.registerSubmit = function(user) {
		// console.log(user);
		user.username = user.email;

		$http.post('/auth/local/register', user)
		.success(function(response) {
			console.log(response);
			$state.go('elections');
		})
	}

})
.controller('electionsCtrl', function($scope) {
	// do a http request when page loads /options ? year = 2015 filter '?'

})
.controller('stateCtrl', function($scope, $http, $state) {

	$scope.stateSubmit = function() {
		$state.go('elections');
	}

	// $scope.selection = function(position, options) {
	// 	angular.forEach(options, function(governor, index) {
	// 		if(position != index)
	// 			governor.checked = false;
	// 	})
	// }

	$scope.states = [];

	$http.get('/options')
		.success(function(states) {
			console.log(states);
			$scope.states = states;
			});

})
.controller('countyCtrl', function($scope) {

	$scope.countySubmit = function() {
		$state.go('elections');
	}

})
.controller('cityCtrl', function($scope) {

	$scope.citySubmit = function() {
		$state.go('elections');
	}

})
.controller('confirmationCtrl', function($scope) {

	$scope.confirmSubmit = function(textConfirm) {
		$state.go('register');
	}
})