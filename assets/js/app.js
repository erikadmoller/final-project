angular.module('app', ['basic.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	})
	.state('register', {
		url: '/register',
		templateUrl: 'templates/registration.html',
		controller: 'registerCtrl'
	})
	.state('elections', {
		url: '/elections',
		templateUrl: 'templates/elections-list.html',
		controller: 'electionsCtrl'
	})
	.state('state', {
		url: '/elections/state',
		templateUrl: 'templates/state.html',
		controller: 'stateCtrl'
	})
	.state('county', {
		url: '/elections/county',
		templateUrl: 'templates/county.html',
		controller: 'countyCtrl'
	})
	.state('city', {
		url: '/elections/city',
		templateUrl: 'templates/city.html',
		controller: 'cityCtrl'
	})
	.state('confirmation', {
		url: '/confirmation',
		templateUrl: 'templates/confirmation.html',
		controller: 'confirmationCtrl'
	})

	$urlRouterProvider.otherwise('/register');
})