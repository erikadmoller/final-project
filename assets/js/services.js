angular.module('basic.services', [])

.factory('Validate', function() {
	return {
			credentials: function(credentials) {
				/* error Model */
				var error = {
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
				};
				/* htmlCredentials.identifier is '' evalutates to false --> 
				!false evals to true. Therfore, it runs the if(true) statement */

				/* True its empty */
				if(!credentials.email) {
					error.email = 'Enter your email address';
				}
				else if(!validator.isEmail(credentials.email)) {
					error.email = 'The email address is not valid';
				}

				if(!credentials.password) {
					error.password = 'Enter a password';
				}

				return error;
			},

			hasError: function(error) {
				for(var i in error) {
					if(error.hasOwnProperty(i) && error[i]) {
						return true;
					}
				}
				return false;
			}
	};
})