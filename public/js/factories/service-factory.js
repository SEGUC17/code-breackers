angular.module('myApp', []).factory('ServiceFactory', ['$http', function($http) {
   return {
  getService: function(id)
  {
    return $http.get('/api/service/' + id);
  }

}]);
