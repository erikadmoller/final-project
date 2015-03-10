angular.module('basic.services', [])

.factory('registerCtrl', function() {
	return {
			credentials: function(credentials) {
				/* error Model */
				var error = {
					identifier: '',
					password: ''
				};
				/* htmlCredentials.identifier is '' evalutates to false --> 
				!false evals to true. Therfore, it runs the if(true) statement */

				/* True its empty */
				if(!htmlCredentials.identifier) {
					error.identifier = 'Enter your email address';
				}
				else if(!validator.isEmail(htmlCredentials.identifier)) {
					error.identifier = 'The email address is not valid';
				}

				if(!htmlCredentials.password) {
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