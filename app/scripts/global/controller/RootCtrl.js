(function(){
	'use strict';
	var module = angular.module('global.controller');

	module.controller('RootCtrl', ['$scope', '$rootScope', 'webStorage', 
	                               function($scope, $rootScope, webStorage){
		
		//Pour definir et assigner les variables globales
		
		//info_user
		$scope.$on('info_user', function(event, data){
			if(webStorage.session.get('$info_user')==null){
				webStorage.session.add('$info_user', data);
			}
			
			console.log(webStorage.session.get('$info_user'));
		});
		
		
		//info_geo
		$scope.$on('info_geo', function(event, data){
			if(webStorage.session.get('$info_geo')==null){
				webStorage.session.add('$info_geo', data);
			}
			
			console.log(webStorage.session.get('$info_geo'));
		});
		
		
	}]);

})();