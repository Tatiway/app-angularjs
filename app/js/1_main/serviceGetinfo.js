

var infoService = angular.module('infoService', ['ngResource']);

/*one way*/

// infoService.factory('Articles', ['$resource', function($resource){
// 	return $resource('json/:name.json',{},{
// 		 query: {method:'GET', params:{name:'stories'}, isArray:true}
// 	});
// }]);

/*two way*/

infoService.factory('Articles', ['$resource', function($resource){
	return $resource('json/:name.json');
}]);




// infoService.service('getInfoService', ['$http', '$q', function($http, $q){

// 	var deferred = $q.defer();

// 	$http.get('json/articles.json').then(function(data){

// 		deferred.resolve(data);

// 	}).then(function(err){

// 		deferred.reject(err);

// 	});

// 	this.getInfo = function(){

// 		console.log(deferred.promise);

// 		return deferred.promise;
// 	};
	

// }]);




// app.service('infoService', ['$http','$q', function($http, $q){

// 	var deferred = $q.defer();

// 	$http.get('json/articles.json').then(function(data){
// 		deferred.resolve(data);
// 	});

// 	this.getInfo = function(){
// 		return deferred.promise;
// 	}

// }]);