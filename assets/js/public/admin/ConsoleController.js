angular.module('ConsoleModule').controller('ConsoleController', ['$scope','$http','toastr','$route','$routeParams', function($scope,$http,toastr,$route,$routeParams){
  	this.$route=$route;
  	this.$routeParams = $routeParams;

}]);