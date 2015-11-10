mainCtrl.controller('contactsCtrl', ['$scope', function($scope){


	$scope.user = {};

	$scope.sendMessage = function(userData){
		$scope.user = angular.copy(userData);
		alert("Ваше ссобщение отправленр " + 	$scope.user );
	}

}]);