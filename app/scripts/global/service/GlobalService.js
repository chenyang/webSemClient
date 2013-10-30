(function(){
	'use strict';
	var mod = angular.module('global.service');

	//Navigation
	mod.constant('Navigation',
			[
			 {  when:"/accueil", 
				 templateUrl:"views/accueil/accueil.html", 
				 controller:"AccueilCtrl"
			 }

			 ]);
	
	
	//web methodes Facade
	mod.factory("cmWSFacade", 
			['$http', 'serverRESTConfig', 
			 function($http, serverRESTConfig){
				
				var compo_url= serverRESTConfig.protocal+
				 serverRESTConfig.domain+':'+
				 serverRESTConfig.port+
				 serverRESTConfig.context;
				
				
				return {
					cmWSGet:function(uri){
						return $http({
							url:compo_url+uri,
							method:"GET", 
							cache:false
						}); 
					}, 

					cmWSPost:function(uri, content){
						return $http({
							url:compo_url+uri,
							method:"POST",
							cache:false,
							data:content
						});
					}
				}
			}]);

})();