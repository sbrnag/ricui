'use strict';

angular.module('dashboardApp').controller('dashboard', function ($scope, $rootScope, posting, $cookies, $location, authorization, $cookieStore) {

    $rootScope.isAuthenticated = true;

    $scope.jobs = [
        {"jobId":"","position":"","company":"",
         "skills":"","expTo":"","expFrom":"","location":""}
    ];

    $scope.add = function() {
       $scope.jobs.push({"jobId":"","position":"","company":"",
                             "skills":"","expTo":"","expFrom":"","location":""}
                            );
    };

    $scope.remove = function(job) {
       var index = $scope.jobs.indexOf(job);
       $scope.jobs.splice(index, 1);
    };

    $scope.clear = function(job) {
        job.jobId = '';
	    job.position = '';
		job.company = '';
		job.skills = '';
		job.expTo = '';
		job.expFrom = '';
		job.location = '';
    };
	
    $scope.postJobs = function (jobs) {
		
		var success = function (data) {
			$scope.message = data.secretKey;
		};

		var error = function (data, status) {
            
            if(status === 401) {
                $location.path('/home');
            }
			$scope.message = data.message;
			// TODO: apply user notification here..
		};

		posting.postJob(jobs).success(success).error(error);

		$scope.jobs = [
           {"jobId":"","position":"","company":"",
            "skills":"","expTo":"","expFrom":"","location":""}
        ];
        

    };

    $scope.logout = function() {
        
        
        var sessionid = $cookieStore.get('secretKey');
        delete $cookies.secretKey;
        //redirect to index page
        
        var success = function () {
            $location.path('/home');
        };

        var error = function () {
           $location.path('/home');
            // TODO: apply user notification here..
        };

        authorization.logout(sessionid).success(success).error(error);
    };


});