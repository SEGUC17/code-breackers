angular.module('myApp', []).factory('SearchFactory', ['$http', function($http) {
   return {
  searchByCategory: function()
  {
    return $http.post('api/searchByCategory', this.selectpicker);
  }
}

}]);
