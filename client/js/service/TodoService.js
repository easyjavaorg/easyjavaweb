'use strict';

app.factory('todoService', ['$http', function($http){
	return{
		createTodo: function(todo){
			return $http.post('<Spring Rest URL>', user).
			success(function(res){
				
			});
		}
	}
}]);