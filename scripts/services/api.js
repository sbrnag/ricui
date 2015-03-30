'use strict';

angular.module('dashboardApp').factory('api', function ($http, $location, $cookieStore) {

  	return {
		init: function (token) {
		  	var secretKey = $cookieStore.get('secretKey');
		  	$http.defaults.headers.common['secretKey'] = token || secretKey;	
		    if (secretKey) {
		  	    $location.path('/dashboard');
            } 
        }
	};
});
