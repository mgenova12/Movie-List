app.controller('MovieController', ['$scope', 'movies', '$routeParams', function($scope, movies, $routeParams) {
  movies.success(function(data) {
    $scope.movie = data[$routeParams.id];
  });
}]);