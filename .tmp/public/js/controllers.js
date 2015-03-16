angular.module('basic.controllers', ['basic.services', 'ui.router'])
.controller('loginCtrl', function($scope, $http, $state) {
	
	$scope.user = {
		password: '',
		email: ''
	}

	$scope.loginSubmit = function(user) {
		user.username = user.email;
		console.log(user);

		$http.post('/auth/local', user)
		.success(function(response) {
			console.log(response);
			$state.go('elections');
		})

	};
})
.controller('registerCtrl', function($scope, $http, $state, Validate) {

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

	$scope.error = {
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

		$scope.error = Validate.credentials(user);
		console.log($scope.error);

		if(!Validate.hasError($scope.error)) {
			var user = {
				username: user.username,
			 	email: user.email,
			 	password: user.password,
			 	name: user.name,
			 	street: user.street,
			 	apt: user.apt,
			 	city: user.city,
			 	state: user.state,
			 	zipcode: user.zipcode,
			 	phone: user.phone,
			 	ssn: user.ssn
			 };
		 console.log(user);

			$http.post('/auth/local/register', user)
			.success(function(response) {
				console.log(response);
				$state.go('elections');
			})

			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		};

	};

})
.controller('electionsCtrl', function($scope, $http, $state) {
	// do a http request when page loads /options ? year = 2015 filter '?'
	$scope.logout = function() {
		$http.get('/logout')
		.success(function(logout) {
			console.log(logout);
			$state.go('login');
		});
	}
	$scope.finish = function() {
		$state.go('confirmation');	
	}

})
.controller('stateCtrl', function($scope, $http, $state) {

	$scope.governors = [];
	$scope.representatives = [];

	$http.get('/options?race=governor')
	.success(function(states) {
		// console.log(states);
		$scope.governors = states;
	});

	$http.get('/options?race=representative')
	.success(function(states) {
		// console.log(states);
		$scope.representatives = states;
	});


	// $scope.pick = { 
	// 	governor: '',
	// 	representative: ''
	// };

	$scope.stateSubmit = function(governorChoice, representativeChoice) {
		// console.log(governorChoice, representativeChoice);
		// console.log($scope.pick);
		// console.log($scope.user);

		var userGovChoice = {
			userId: 1,
			choice: governorChoice
		};

		var userRepChoice = {
			userId: 1,
			choice: representativeChoice
		};

		$http.post('/votes', userGovChoice)
			.success(function(response) {
				console.log(response);
			});

		$http.post('/votes', userRepChoice)
			.success(function(response) {
				console.log(response);
			});

		$state.go('elections');	
	};

})
.controller('countyCtrl', function($scope, $http, $state) {

	$scope.propositions = [];
	$scope.laws = [];

	$http.get('/options?race=proposition')
	.success(function(county) {
		// console.log(county);
		$scope.propositions = county;
	});

	$http.get('/options?race=law')
	.success(function(county) {
		// console.log(county);
		$scope.laws = county;
	});


	// $scope.pick = { 
	// 	proposition: '',
	// 	law: ''
	// };

	$scope.countySubmit = function(propositionChoice, lawChoice) {
		// console.log(propositionChoice, lawChoice);
		// console.log($scope.pick);
		// console.log($scope.user);

		var userPropChoice = {
			userId: 1,
			choice: propositionChoice
		};

		var userLawChoice = {
			userId: 1,
			choice: lawChoice
		};

		$http.post('/votes', userPropChoice)
			.success(function(response) {
				console.log(response);
			});

		$http.post('/votes', userLawChoice)
			.success(function(response) {
				console.log(response);
			});

		$state.go('elections');	
	};

})
.controller('cityCtrl', function($scope, $http, $state) {

	$scope.mayors = [];
	$scope.councilmen = [];

	$http.get('/options?race=mayor')
	.success(function(city) {
		// console.log(city);
		$scope.mayors = city;
	});

	$http.get('/options?race=councilman')
	.success(function(city) {
		// console.log(city);
		$scope.councilmen = city;
	});


	// $scope.pick = { 
	// 	mayor: '',
	// 	councilman: ''
	// };

	$scope.citySubmit = function(mayorChoice, councilmanChoice) {
		// console.log(mayorChoice, councilmanChoice);
		// console.log($scope.pick);
		// console.log($scope.user);

		var userMayChoice = {
			userId: 1,
			choice: mayorChoice
		};

		var userCounChoice = {
			userId: 1,
			choice: councilmanChoice
		};

		$http.post('/votes', userMayChoice)
			.success(function(response) {
				console.log(response);
			});

		$http.post('/votes', userCounChoice)
			.success(function(response) {
				console.log(response);
			});

		$state.go('elections');	
	};

})
.controller('confirmationCtrl', function($scope, $state) {

	$scope.textUpdate = false;

	$scope.confirmSubmit = function(textConfirm) {

		if(textConfirm === 'yes') {
			$scope.textUpdate = true;
		}
		else {
			$state.go('register');
		}
	};
});