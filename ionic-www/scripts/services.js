var servicesModule = angular.module('services', []);

servicesModule
    .service('GetService', function($http) {
            this.getAllRequestsService = function(callback) {
                $http({
                    method : 'GET',
                    url : 'http://localhost:3000/ezyClaims/allRequests'
                }).success(callback).error(function(data, status, headers, config) {
                    console.log(data);
                });
            }

            this.getOpenRequestsService = function(callback) {
                $http({
                    method : 'GET',
                    url : 'http://localhost:3000/ezyClaims/openRequests'
                }).success(callback).error(function(data, status, headers, config) {
                    console.log(data);
                });
            }

            this.getRequestService = function(callback, requestId) {
                $http({
                    method : 'GET',
                    url : 'http://localhost:3000/ezyClaims/request/' + requestId,
                }).success(callback).error(function(data, status, headers, config) {
                    console.log(data);
                });
            }
    })

    .service('PostService', function($http) {
            this.addRequestService = function(callback, data) {
                $http({
                    method : 'POST',
                    url : 'http://localhost:3000/ezyClaims/addRequest',
                    data : data
                }).success(callback).error(function(data, status, headers, config) {
                    console.log(data);
                });
            }

    });