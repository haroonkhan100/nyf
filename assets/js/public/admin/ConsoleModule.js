angular.module('ConsoleModule',['toastr','compareTo','ngResource','ngRoute','smart-table']).factory('PieceAPI', function($resource) {
  return $resource('/piece/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' 
    }
  });
}).factory('CountryAPI', function($resource) {
  return $resource('/country/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' 
    }
  });
}).factory('UserGroupAPI', function($resource) {
  return $resource('/usergroup/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' 
    }
  });
}).config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/piece", {
		templateUrl: 'piece/list',
		controller: 'PieceController'
	})
	.when("/piece/create",{
		templateUrl: "piece/create",
		cotroller: 'PieceController'
	})
	.when("/piece/view/:theid",{
		templateUrl: "piece/view",
		controller: 'PieceController'
	})
	.when("/piece/edit/:theid",{
		templateUrl: "piece/edit",
		controller: 'PieceController'
	})
	.when("/usergroup", {
		templateUrl: 'usergroup/list',
		controller: 'UserGroupController'
	})
	.when("/usergroup/create",{
		templateUrl: "usergroup/create",
		cotroller: 'UserGroupController'
	})
	.when("/usergroup/view/:theid",{
		templateUrl: "usergroup/view",
		controller: 'UserGroupController'
	})
	.when("/usergroup/edit/:theid",{
		templateUrl: "usergroup/edit",
		controller: 'UserGroupController'
	})
	.when("/country", {
		templateUrl: 'country/list',
		controller: 'CountryController'
	})
	.when("/country/create",{
		templateUrl: "country/create",
		cotroller: 'CountryController'
	})
	.when("/country/edit/:theid",{
		templateUrl: "country/edit",
		controller: 'CountryController'
	})
	.when("/",{
		templateUrl: "test1.html"
	})
	.otherwise({
		templateUrl: "test2.html"
	});
}]).run(['$route',angular.noop]);