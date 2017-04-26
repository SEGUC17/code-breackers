(function(){
    angular.module('myApp')
.controller('SController', ['$scope', '$state', '$http', function($scope, $state, $http){



  $scope.createService = function() {

  $http.post('/api/addService', $scope.newService).then(function(response) {
  //console.log(response.data);
  $scope.services = response.data;
  });

};

    }]);
}());
