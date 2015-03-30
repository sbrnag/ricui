'use strict';

angular.module('dashboardApp').controller('recover', function ($scope, $location, passwordrecover, $rootScope) {
	// do nothing
   
    $scope.submit = function() {
        var email = this.email;

       var success = function (data) {
			$rootScope.loginmessage = data.secretKey;
			$location.path('/login');
			
		};

	    var error = function (data, status) {
			if(status === 500) {
               $scope.message = "Oops something went wrong; please try again later";
            } else if(status === 404) {
               $scope.message = data.message;
            }
		};

        passwordrecover.recover(email).success(success).error(error);

    };
    
});