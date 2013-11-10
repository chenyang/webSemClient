(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('AccueilCtrl', ['$scope', '$location', 'webStorage', 'cmWSFacade', 'AccueilService', 
	                                  function($scope, $location, webStorage, cmWSFacade, AccueilService){

		//Get position $info_geo
		$scope.longitude = webStorage.session.get('$info_geo').longitude; 
		$scope.latitude = webStorage.session.get('$info_geo').latitude; 
		
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
		
		
		
		//Get All liste de styles
		AccueilService.getAllStyles().success(function(data, status){
			console.log(data);
			$scope.stylesTous = data;
			
			AccueilService.getStylesByName("Chenyang").success(function(data, status){
				$scope.stylesByUser = data;
				$scope.stylesReste = _.filter($scope.stylesTous, function(obj){
					//if obj not in stylesByUser
					if(!_.contains(_.pluck($scope.stylesByUser, 'id_style'), obj.id_style)){
						return obj;
					}
				});				
			});
			
		});
		

		
		

	}]);

})();