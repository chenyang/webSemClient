(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('AccueilCtrl', ['$scope', '$location', 'webStorage', 'cmWSFacade', 
	                                  function($scope, $location, webStorage, cmWSFacade){
		
		$scope.nom_user = webStorage.session.get('$info_user').nom;
		$scope.ville_actu = webStorage.session.get('$info_geo').city + '   '
		+ webStorage.session.get('$info_geo').host;

		
		$scope.rechercher = function(){
			if($scope.mon_radio==1){
				$location.path('/festivales');
			}else if($scope.mon_radio==2){
				$location.path('/concerts');
			}
		};
		
		
		
		/*$scope.getData = function(){
			cmWSFacade.cmWSGet("tasks").success(function(data){
				console.log(data);
				$scope.data_return = data;
			}).error(function(data, status){
				console.log('error'+data+' '+status);
				$scope.data_return = 'error server';
			});
		}*/
		
		
	}]);

})();