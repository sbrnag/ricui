'use strict';

angular.module('dashboardApp').controller('auth', function ($scope, $location, $cookieStore, authorization, api) {
	$scope.title = 'Referral India';
	//$rootScope.isAuthenticated = false;

	$scope.login = function () {
		var credentials = {
			userName: this.usernameoremail,
			password: this.password
		};

		var success = function (data) {
			var token = data.secretKey;

			api.init(data.secretKey);
            
			$cookieStore.put('secretKey', token);
			
			$location.path('/dashboard');
			//$rootScope.isAuthenticated = true;
		};

		var error = function (data, status) {
            if(status === 500) {
               $scope.loginmessage = "Oops something went wrong; please try again later";
            } else if(status === 404) {
               $scope.loginmessage = "Invalid user credentials; please try with correct username or email and password";
            }

			//$rootScope.isAuthenticated = false;
			// TODO: apply user notification here..
		};

		authorization.login(credentials).success(success).error(error);
	};

	$scope.signup = function () {
		var userdetails = {
			'firstName' : this.firstname,
            'lastName'  : this.lastname,
            'userName'  : this.username,
            'personalEmail': this.email,
            'password' :	this.newpassword 
        };

		var success = function (data) {
			var token = data.secretKey;

			api.init(data.secretKey);
            
			$cookieStore.put('secretKey', token);
			
			$location.path('/dashboard');
			//$rootScope.isAuthenticated = true;
		};

		var error = function (data, status) {
			if(status === 500) {
               $scope.signupmessage = "Oops something went wrong; please try again later";
            } else if(status === 409) {
               $scope.signupmessage = data.message;
            } 
		};

		authorization.register(userdetails).success(success).error(error);
	};


});