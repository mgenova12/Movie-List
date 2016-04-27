app.factory('movies', ['$http', function($http) {
  return $http.get('/API/data.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);