'use strict';

angular.module('dashboardApp').factory('passwordrecover', function ($http, config) {
	var url = config.analytics.url;

	return {
		recover: function (email) {
			return $http.get(url + '/referralindia/rest/forgetPassword/' + email);
		}
	};
});
