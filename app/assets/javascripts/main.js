app = angular.module("Tasks", ["ngResource"]);

app.factory("Task", function($resource) {
	return $resource("/tasks/:id", {id: "@id"}, {update: {method: "PUT"}});
});

function TaskCtrl($scope, Task) {
	$scope.tasks = Task.query();

	$scope.addTask = function () {
		if ($scope.newTask) {
			task = Task.save($scope.newTask)
			$scope.tasks.push(task);
			$scope.newTask = {};
		}
	};

	$scope.clearDone = function ($index) {
		$scope.tasks = Task.query();
	};

	$scope.markDone = function ($index) {
		tasks = Task.delete($scope.tasks[$index]);

	};
}

app.directive("omar", function() {
	return {
			link: function (scope, element) {
				angular.element(element).bind('click', function() {
					angular.element(element).addClass("done");
					console.log("hello");
				})
		}
	}
});

app.directive("button", function() {
	return{
		link: function (scope, element) {
			element.bind('mouseenter', function() {
				element.css('color', '#FFFFFF');
			})
			element.bind ('mouseleave', function() {
				element.css('color', '#000000');
			})
		}
	}
});