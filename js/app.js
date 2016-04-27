var app = angular.module('MoviesApp', ['ngRoute']);

	app.config(function($routeProvider){
  	$routeProvider
    	.when('/movie', {
      	controller: 'HomeController',
      	templateUrl:'views/home.html'
    })
  		.when('/movie/:id', {
      	controller:'MovieController',
      	templateUrl:'views/movie.html'
    })
    	.otherwise ({
      	redirectTo: '/movie'
    })

  });