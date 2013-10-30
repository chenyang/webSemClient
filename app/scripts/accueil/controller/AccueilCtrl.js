(function(){
	'use strict';
	var module = angular.module('accueil.controller');

	module.controller('AccueilCtrl', ['$scope', 'cmWSFacade', function($scope, cmWSFacade){

		$scope.name = "gao";
		cmWSFacade.cmWSGet("tasks").success(function(data){
			console.log(data);
		}).error(function(data){
			console.log('error'+data);
		});

	}]);



})();