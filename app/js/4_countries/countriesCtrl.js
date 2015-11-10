
mainCtrl.controller('countriesCtrl', ['$scope', '$routeParams' ,'Articles', function( $scope, $routeParams, Articles ){

	Articles.query({name:'stories'}, function(data){

		$scope.countries = data;

		// var country = data;
		console.log($scope.countries);

	});

	

	$scope.orderCounrty =  $routeParams.countryId;

}]);