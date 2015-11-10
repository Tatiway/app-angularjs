
mainCtrl.controller( 'photosCtrl', ['$scope','Articles','$window', function( $scope, Articles, $window){


	Articles.query({name:'photos'}, function(data){
		
		$scope.photos = data;
	
	});

	
	$scope.numPhotos = 6;
	$scope.check = true;


	$scope.showPhotos = function(){

		if( $scope.numPhotos < $scope.photos.length ) $scope.numPhotos += $scope.numPhotos;
		else $scope.check  = false;

	}
    

   








	




}]);