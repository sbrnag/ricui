'use strict';

angular.module('dashboardApp').factory('posting', function ($http, config) {
	var url = config.analytics.url;

	return {
		postJob: function (jobs) {
			return $http.post(url + '/referralindia/rest/postJobs', jobs);
		}
	};
});
