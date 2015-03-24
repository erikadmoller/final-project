angular.module('basic.controllers', ['basic.services', 'ui.router'])
.controller('loginCtrl', function($scope, $http, $state) {
	
	$scope.user = {
		email: '',
		identifier: ''
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


	$scope.pick = { 
		governor: '',
		representative: ''
	};

	$scope.stateSubmit = function(governorChoice, representativeChoice) {
		console.log(governorChoice, representativeChoice);
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


	$scope.pick = { 
		proposition: '',
		law: ''
	};

	$scope.countySubmit = function(propositionChoice, lawChoice) {
		console.log(propositionChoice, lawChoice);
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


	$scope.pick = { 
		mayor: '',
		councilman: ''
	};

	$scope.citySubmit = function(mayorChoice, councilmanChoice) {
		console.log(mayorChoice, councilmanChoice);
		// console.log($scope.pick);
		// console.log($scope.user);

		var userMayChoice = {
			userId: 1, 
			// user.id
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
.controller('confirmationCtrl', function($scope, $http, $state) {

	$scope.textUpdate = false;

	$scope.confirmSubmit = function(textConfirm) {

		if(textConfirm === 'yes') {
			$scope.textUpdate = true;
			$http.post('/message/send')
				.success(function(response) {
					console.log(response);
				})
		}
		else {
			$http.get('/logout')
				.success(function(response) {
					console.log(response);
				})
			$state.go('register');
		}
	};
})
	.controller('winnerCtrl', function($scope, $http, $state) {

	$scope.options = [];

	$http.get('/votes?limit=1000000')
	.success(function(data) {
		console.log(data);

		var scopeTally = _.countBy(data, function(vote) {
			return vote.choice.id
		});

		$http.get('/options?race=governor')
		.success(function(options) {

			for(var i = 0; i < options.length; i++) {
				options[i].sum = scopeTally[options[i].id];
				// console.log(options[i].sum);
			}

			// 	// find total votes of governor race for charting			
			var total = 0;
			for(var i in options) { 
				total += options[i].sum; 
				$scope.max = total;
			}
			// console.log($scope.max);

				// find percentage of candidate's sum votes			
			for(var i in options) {
				options[i].sum = Math.floor((options[i].sum / total) * 100);
				// console.log(options[i].sum);
				$scope.options.push(options[i]);
			}
			// console.log($scope.options);
   
		})

		$http.get('/options?race=representative')
		.success(function(options) {

			for(var i = 0; i < options.length; i++) {
				options[i].sum = scopeTally[options[i].id];
				// console.log(options[i].sum);
			}

			// 	// find total votes of governor race for charting			
			var total = 0;
			for(var i in options) { 
				total += options[i].sum; 
				$scope.max = total;
			}
			// console.log($scope.max);

				// find percentage of candidate's sum votes			
			for(var i in options) {
				options[i].sum = Math.floor((options[i].sum / total) * 100);
				// console.log(options[i].sum);
				$scope.options.push(options[i]);
			}
			// console.log($scope.options);
   
		})

		$http.get('/options?race=proposition')
		.success(function(options) {

			for(var i = 0; i < options.length; i++) {
				options[i].sum = scopeTally[options[i].id];
				// console.log(options[i].sum);
			}

			// 	// find total votes of governor race for charting			
			var total = 0;
			for(var i in options) { 
				total += options[i].sum; 
				$scope.max = total;
			}
			// console.log($scope.max);

				// find percentage of candidate's sum votes			
			for(var i in options) {
				options[i].sum = Math.floor((options[i].sum / total) * 100);
				// console.log(options[i].sum);
				$scope.options.push(options[i]);
			}
			// console.log($scope.options);		
		})

		$http.get('/options?race=law')
		.success(function(options) {

			for(var i = 0; i < options.length; i++) {
				options[i].sum = scopeTally[options[i].id];
				// console.log(options[i].sum);
			}

			// 	// find total votes of governor race for charting			
			var total = 0;
			for(var i in options) { 
				total += options[i].sum; 
				$scope.max = total;
			}
			// console.log($scope.max);

				// find percentage of candidate's sum votes			
			for(var i in options) {
				options[i].sum = Math.floor((options[i].sum / total) * 100);
				// console.log(options[i].sum);
				$scope.options.push(options[i]);
			}
			// console.log($scope.options);
		})

		$http.get('/options?race=mayor')
		.success(function(options) {

			for(var i = 0; i < options.length; i++) {
				options[i].sum = scopeTally[options[i].id];
				// console.log(options[i].sum);
			}

			// 	// find total votes of governor race for charting			
			var total = 0;
			for(var i in options) { 
				total += options[i].sum; 
				$scope.max = total;
			}
			// console.log($scope.max);

				// find percentage of candidate's sum votes			
			for(var i in options) {
				options[i].sum = Math.floor((options[i].sum / total) * 100);
				// console.log(options[i].sum);
				$scope.options.push(options[i]);
			}
			// console.log($scope.options);
   
		})

		$http.get('/options?race=councilman')
		.success(function(options) {

			for(var i = 0; i < options.length; i++) {
				options[i].sum = scopeTally[options[i].id];
				// console.log(options[i].sum);
			}

			// 	// find total votes of governor race for charting			
			var total = 0;
			for(var i in options) { 
				total += options[i].sum; 
				$scope.max = total;
			}
			// console.log($scope.max);

				// find percentage of candidate's sum votes			
			for(var i in options) {
				options[i].sum = Math.floor((options[i].sum / total) * 100);
				// console.log(options[i].sum);
				$scope.options.push(options[i]);
			}
			// console.log($scope.options);
   
		})

		// Creating the chart

		    $scope.height = 100;
		    $scope.width = 150;
		    // $scope.yAxis = 'Sales';
		    // $scope.xAxis = '2014';
		    
		    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
		    // $scope.max = 0;
		    // console.log($scope.max);
		    
		    var arrLength = $scope.options.length;
		 //    for (var i = 0; i < arrLength; i++) {
		 //        // Find Maximum X Axis Value
		 //        if($scope.options[i].sum > $scope.max) {
		 //        $scope.max = $scope.options[i].sum;
		 //    	}
			// }
	});

});