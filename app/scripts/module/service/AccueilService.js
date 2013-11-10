(function(){
	'use strict';
	var mod = angular.module('mod.service');
	
	mod.factory('AccueilService', ['$rootScope', 'cmWSFacade', 
	                               function($rootScope, cmWSFacade){
		
		return{
			getAllStyles:function(){
				return cmWSFacade.cmWSGet('styles');
			},
		
			getStylesByName:function(username){
				return cmWSFacade.cmWSGet('stylesByName?username='+username);
			}
		
		
		}
	
	}]);
	                            
})();