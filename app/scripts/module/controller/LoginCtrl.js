(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'cmWSFacade', '$http', 
	                                function($scope, $rootScope, $location, cmWSFacade, $http){


		$scope.loadAddresseInfo = function(){
			$rootScope.$broadcast('spinnerOn');
			return $http({
				method:'JSONP', 
				url:"https://smart-ip.net/geoip-json?callback=JSON_CALLBACK"
			});
		};
		
		
		$scope.checkLogin = function(){
			//function d'authentification
			if($scope.nom == 'gao' && $scope.pass=='123'){
				//aussi associer style du musique
				$scope.type_musique = 'pop';
				
				$scope.$emit('info_user', {
					nom : $scope.nom,
					pass : $scope.pass, 
					type_musique : $scope.type_musique
				});
				
				//WS freeipgeo
				$scope.loadAddresseInfo().success(function(data, status){
					$rootScope.$broadcast('spinnerOff');
					
					$scope.$emit('info_geo', data);
					//redireger a la page d'accueil
					$location.path('/accueil');
					
				}).error(function(data, status){
					alert('ip_add serveur ne fonctionne pas!');
				});



			}else{//erreur d'authentification

			}
		}

	}]);

})();