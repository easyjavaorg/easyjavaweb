app.controller("todoAppController",["$scope", function($scope){
	$scope.title = "Hello Angular in my todoApp";

	$scope.todo = {
		status: '-1',
		priority: '-1',
		title: "",
		desc: ""
	};

	$scope.save = function(_todo) {
	    $scope.todo = angular.copy(_todo);
	    console.log($scope.todo);
    };



	$scope.allStatus = {'-1': 'Status', '0': 'Active', '1' : 'Completed'};
	$scope.bindStatus = function(s){
		$scope.todo.status = s;
	};

	$scope.priorities = {'-1': 'Priority', 'H': 'High', 'M': 'Medium', 'L' : 'Low'};
	$scope.bindPriority = function(p){
		$scope.todo.priority = p;
	};

}]);