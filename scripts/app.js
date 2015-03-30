'use strict';

var app = angular.module('dashboardApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
]);

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
	
	$httpProvider.interceptors.push('httpInterceptor');

	$routeProvider
		.when('/dashboard', { templateUrl: 'ric/views/dashboard.html', controller: 'dashboard' })
		.when('/login', { templateUrl: 'ric/views/auth.html', controller: 'auth' })
		.when('/password_reset', { templateUrl: 'ric/views/forgotpassword.html', controller: 'recover' })
		.otherwise({ redirectTo: '/login' });

	$locationProvider.html5Mode({
         enabled: true,
         requireBase: false });
});

app.run(function (api) {
	api.init();
});
