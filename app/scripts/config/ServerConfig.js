(function(){ 
  'use strict';
  var mod = angular.module('global.service');

//===>information for local machine, your computer
  mod.constant('serverConfig', {
    protocal:'http://', 
    domain:'localhost',
    context:'', 
    port:9200
  });

//===>information for the server who provides REST service
  mod.constant('serverRESTConfig', {
    protocal:'http://', 
    domain:'192.168.32.131',
    port:9000, 
    context:'/'
  });
  
})();