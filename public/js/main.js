angular.module("lingoApp",[])

angular.module("lingoApp").controller("lingoController",["$scope", "$http", function($scope, $http){

	$scope.translatedWord = ""

	$scope.translate = function(){
		$http.post("/translation", $scope.translation).then(function(returnData){
			$scope.translatedWord = returnData.data
		})
	}

	$scope.greeting = "Welcome, friend!";




}])