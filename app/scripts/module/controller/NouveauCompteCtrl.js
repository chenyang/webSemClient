(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('NouveauCompteCtrl', ['$scope', 'cmWSFacade', function($scope, cmWSFacade){
		
		console.log($scope.nom);
		
		$scope.open = function(){
			console.log('open');
			
			
$scope.items = ['item1', 'item2', 'item3'];
			
			var modalInstance = $modal.open({
				templateUrl: 'template/templateAnnotationModal.html',
				//controller: ModalInstanceCtrl,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
			
			
		}
		
		
		
	}]);

})();