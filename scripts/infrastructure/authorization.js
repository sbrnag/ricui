'use strict';

angular.module('dashboardApp').factory('authorization', function ($http, config) {
	var url = config.analytics.url;

	return {

		login: function (credentials) {
			return $http.post(url + '/referralindia/rest/login', credentials);
		}, 

		register: function (userdetails) {
			return $http.post(url + '/referralindia/rest/signup', userdetails);
		},

		logout: function(sessionid) {
			return $http.delete(url + '/referralindia/rest/logout/' + sessionid);
		}

	};

});
