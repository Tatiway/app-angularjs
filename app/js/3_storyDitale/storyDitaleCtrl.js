
mainCtrl.controller( 'storyDitaleCtrl', ['$scope','$routeParams','Articles', function($scope, $routeParams, Articles){

	/*one way*/
	// $scope.id = $routeParams.storyId;
	// $scope.ditaleStory =  Articles.query();

	
 /*two way*/
 

	Articles.query({name:'stories'}, function(data){

		var story = data;

		for(var i = 0; i < story.length; i++){

			if(story[i].id == $routeParams.storyId ){

				$scope.storyDitale = story[i];
			}
		};

	});

	

	
	// $scope.ditaleStory;
	//вариан если на каждую историю есть свой json файл и имя файла его 'story_'+$routeParams.storyId
	// Articles.get({name:'story_'+$routeParams.storyId}, function(data){
	// 	console.log(data);
	// });

	//console.log( $routeParams.storyId);

}]);