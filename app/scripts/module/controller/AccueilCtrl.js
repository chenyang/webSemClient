(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('AccueilCtrl', ['$scope', '$location', 'webStorage', 'cmWSFacade', 'AccueilService', 
	                                  function($scope, $location, webStorage, cmWSFacade, AccueilService){

		//Get position $info_geo
		$scope.longitude = webStorage.session.get('$info_geo').longitude; 
		$scope.latitude = webStorage.session.get('$info_geo').latitude; 
		$scope.$info_user = webStorage.session.get('$info_user');

		$scope.nom_user = webStorage.session.get('$info_user').nom;
		$scope.ville_actu = webStorage.session.get('$info_geo').city + '   '
		+ webStorage.session.get('$info_geo').region_name;
		
		
		//Configue google
		angular.extend($scope, {
			position: {
				coords: {
					latitude: $scope.latitude,
					longitude: $scope.longitude
				}
			},
			/** the initial center of the map */
			centerProperty: {
				latitude: $scope.latitude,
				longitude: $scope.longitude
			},
			/** the initial zoom level of the map */
			zoomProperty: 8,
			/** list of markers to put in the map */
			markersProperty: [ {
				latitude: $scope.latitude,
				longitude: $scope.longitude
			}],
			// These 2 properties will be set when clicking on the map
			clickedLatitudeProperty: null,        
			clickedLongitudeProperty: null,
			eventsProperty: {
				click: function (mapModel, eventName, originalEventArgs) {        
					// c'est le scope de directive
					console.log("user defined event on map directive with scope", this);
					console.log("user defined event: " + eventName, mapModel, originalEventArgs);
				}
			}
		});

		
		$scope.addUserStyles = function(style_id){
			AccueilService.addUserStyles($scope.$info_user.nom, style_id).success(function(data, status){
				$scope.stylesByUser = data.binding;
			});
		}

		$scope.deleteUserStyles = function(style_id){
			AccueilService.deleteUserStyles($scope.$info_user.nom, style_id).success(function(data, status){
				$scope.stylesByUser = data.binding;
			});
		}
		

		$scope.getAvailables = function(){
			//Get Liste des styles non preferes par users
			AccueilService.getStylesAvailableByUserName($scope.$info_user.nom).success(function(data, status){
				$scope.stylesReste = data.binding;
			});
		}

		
		$scope.init = function(){
			//Get Liste styles from user
			AccueilService.getStylesByUserName($scope.$info_user.nom).success(function(data, status){
				$scope.stylesByUser = data.binding;
			});
		}
		//Methodes a initialiser
		$scope.init();


	}]);

})();