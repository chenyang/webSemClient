(function(){
	'use strict';
	var mod = angular.module('global.service');

	//Navigation
	mod.constant('Navigation',
			[
			 {  when:"/login", 
				 templateUrl:"views/login.html", 
				 controller:"LoginCtrl"
			 }, 
			 {  when:"/accueil", 
				 templateUrl:"views/accueil.html", 
				 controller:"AccueilCtrl"
			 },
			 {  when:"/festivales", 
				 templateUrl:"views/festivale.html", 
				 controller:"FestivaleCtrl"
			 },
			 {  when:"/concerts", 
				 templateUrl:"views/concert.html", 
				 controller:"ConcertCtrl"
			 },
			 {  when:"/groupes", 
				 templateUrl:"views/group.html", 
				 controller:"GroupCtrl"
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
							cache:false, 
							timeout:2000
						}); 
					}, 

					cmWSPost:function(uri, content){
						return $http({
							url:compo_url+uri,
							method:"POST",
							cache:false,
							timeout:2000,
							data:content
						});
					}
				}
			}]);

})();