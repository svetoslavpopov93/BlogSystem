(function () {
	var app= angular.module('app', ["ngRoute"]);
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
        .when('/home',
        {
        	controller: 'HomeController',
        	templateUrl: '/views/home-view.html'
        })
        .when('/posts',
        {
        	controller: 'PostsController',
        	templateUrl: '/views/posts-view.html'
        })
        .otherwise({ redirectTo: '/home' });
	}]);
	// configure existing services inside initialization blocks.
	app.config(['$locationProvider', function ($locationProvider) {
		// Configure existing providers
		$locationProvider.hashPrefix('');
	}]);
}());