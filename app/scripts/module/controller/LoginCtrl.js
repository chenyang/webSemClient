(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'cmWSFacade', 'LoginService', '$http', 
	                                function($scope, $rootScope, $location, cmWSFacade, LoginService, $http){


		$scope.loadAddresseInfo = function(){
			$rootScope.$broadcast('spinnerOn');
			return $http({
				method:'JSONP', 
				url:"http://freegeoip.net/json/?callback=JSON_CALLBACK"
			});
		};
		
		
		$scope.maPosition = function(position){
			console.log(position);
		}
		
		$scope.checkLogin = function(){
			//function d'authentification
			LoginService.checkLogin($scope.nom, $scope.pass).success(function(data, status){

				if(data.result=='success'){
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
						console.log(data);
						console.log(status);
						alert('ip_add serveur ne fonctionne pas!');
						//alert('on va choisir notre propre adresse');
						if(navigator.geolocation){
							navigator.geolocation.getCurrentPosition($scope.maPosition);
						}
						
					});

				}else{// fause d'authentification
					
					alert('Utilisateur not existe');
				}
				
				
			});
		}

	}]);

})();