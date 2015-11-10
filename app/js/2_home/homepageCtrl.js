

var mainCtrl = angular.module('mainCtrl',[]);

mainCtrl.controller('homepageCtrl', ['$scope', 'Articles', function($scope, Articles){

	/*one way*/
	// $scope.stories = Articles.query();
	// console.log($scope.stories);

	/*two way*/

	Articles.query({name:'stories'}, function(data){
		
		$scope.stories = data;
		
	});

	$scope.raitingFilter = function(storyItem){
		return storyItem.raiting > "50" && storyItem.status == "new";
	}

	









}]);