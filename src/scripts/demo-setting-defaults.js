/*global angular */
'use strict';
angular.module('app', ['ngAnimate','cgBusy'])
  .value('cgBusyDefaults', {
    backdrop: true,
    delay: 300,
    message: 'Please wait...',
    templateUrl: 'custom-cgbusy-template.html',
    wrapperClass: 'cg-busy cg-busy-animation fixed-center'
  });

angular.module('app').controller('DemoCtrl',function($scope,$http){

	$scope.delay = 0;
	$scope.minDuration = 0;
	$scope.message = 'Please Wait...';
	$scope.backdrop = true;
	$scope.promise = null;

	$scope.demo = function(){

		$scope.promise = $http.get('http://httpbin.org/delay/3');

	};


});
