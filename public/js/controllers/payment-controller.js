(function() {
  angular.module('myApp')
    .controller('PaymentController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams) {

      //Getting Service ID
      $http.get('/api/service/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        $scope.service = response.data[0];
      });

      var serviceID = $stateParams.id;
      console.log($stateParams.id);


      $http.post('/checkout').then(function(response) {
        console.log("hello3");
      });

    }]);
}());
