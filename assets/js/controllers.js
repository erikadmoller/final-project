angular.module('basic.controllers', ['basic.services', 'ui.router'])
.controller('loginCtrl', function($scope, $http, $state, Validate) {
	
	$scope.user = {
		password: '',
		identifier: ''
	}

	$scope.error = {
		email: '',
		password: ''
	}

	$scope.loginSubmit = function(user) {
		user.email = user.identifier;
		console.log(user);

		$scope.error = Validate.credentials(user);
		console.log($scope.error);


		if(!Validate.hasError($scope.error)) {
			var user = {
			 	password: user.password,
			 	identifier: user.email,
			 };
		 console.log(user);

		$http.post('/auth/local', user)
		.success(function(response) {
			console.log(response);
			$state.go('elections');
		})

		.error(function(err) {
				console.log('Error!');
				console.log(err);
				$scope.loginErrorMsg = err.summary;
			});
	};

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
	$scope.userVote = {
		userId: '',
		id: ''
	}

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

		$http.get('/auth/user')
			.success(function(response) {
				// console.log(response);
				$scope.user = response;

			var userGovChoice = {
				userId: $scope.user.id,
				choice: governorChoice
			};

			var userRepChoice = {
				userId: $scope.user.id,
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

			})

			.error(function(err) {
				console.log('Error!');
				console.log(err);
				$state.go('login');
			});
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

		$http.get('/auth/user')
			.success(function(response) {
				// console.log(response);
				$scope.user = response;

				var userPropChoice = {
					userId: $scope.user.id,
					choice: propositionChoice
				};

				var userLawChoice = {
					userId: $scope.user.id,
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

			})

			.error(function(err) {
				console.log('Error!');
				console.log(err);
				$state.go('login');
			});
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

		$http.get('/auth/user')
			.success(function(response) {
				// console.log(response);
				$scope.user = response;

				var userMayChoice = {
					userId: $scope.user.id, 
					// user.id
					choice: mayorChoice
				};

				var userCounChoice = {
					userId: $scope.user.id,
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
			})

			.error(function(err) {
				console.log('Error!');
				console.log(err);
				$state.go('login');
			});
	};

})
.controller('confirmationCtrl', function($scope, $http, $state) {

	$scope.textUpdate = false;
	$scope.confirmErrorShow = false;
	$scope.confirmLogin = false;

	$scope.confirmSubmit = function(textConfirm) {
		console.log(textConfirm);

		// validate that a selection was made
		if(validator.isNull(textConfirm)) {
			$scope.confirmErrorMsg = "Please select yes or no";
			$scope.confirmErrorShow = true;
		}

		if(textConfirm === 'yes') {
			// $scope.textUpdate = true;
			$http.post('/message/send')
				.success(function(response) {
					console.log(response);

					if(response.error === 'user not logged in') {
						$scope.confirmLogin = true;
					} 
					else{
						$scope.textUpdate = true;
					}
				})
		}
		else if(textConfirm === 'no') {
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