(function() {
  angular.module('myApp')
    .controller('ReservationController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams) {


      //Getting Service ID
      $http.get('/api/service/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        $scope.service = response.data[0];
      });


      var serviceID = $stateParams.id;
      console.log($stateParams.id);


      //Reservation Creation
      $scope.reserve = function() {
        console.log($scope.reservation);
        $scope.reservation.serviceid = serviceID;
        $http.post('/reserve', $scope.reservation).then(function(response) {
          console.log("hello");
          $scope.sarah = response;
          console.log(response);
        });
      }

      //Reservation Change
      $scope.change = function() {
        console.log($scope.changeReservation);
        $scope.changeReservation.serviceid = serviceID;
        $http.post('/change', $scope.changeReservation).then(function(response) {
          console.log("hello2");
          $scope.change2 = response;
          console.log(response);
        });
      }


      //Reservation Delete
      $scope.delete = function() {
        console.log($scope.deleteReservation.delete);
        $scope.deleteReservation.serviceid = serviceID;
        $http.post('/delete', $scope.deleteReservation).then(function(response) {
          console.log("hello3");
          $scope.delete2 = response;

        });
      }



    }]);
}());
