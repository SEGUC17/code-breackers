// "use strict";
(function() {
  angular.module('myApp')
    .controller('ReservationController', ['$scope', '$state', '$http', '$stateParams', '$location', function($scope, $state, $http, $stateParams, $location) {


      //Getting Service ID
      $http.get('/api/service/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        $scope.service = response.data[0];
      });


      var serviceID = $stateParams.id;
      console.log($stateParams.id);

      var scopesarah = $scope.sarah;
      var scopechange = $scope.change2;
      var scopedelete = $scope.delete2;

      //Reservation Creation
      $scope.reserve = function() {
        if (typeof $scope.reservation == 'undefined'){
            $scope.noreserve = "Please enter a valid reservation.";
       }
        else {
        console.log($scope.reservation);
        $scope.reservation.serviceid = serviceID;
        $http.post('/reserve', $scope.reservation).then(function(response) {
          console.log("hello");
          $scope.sarah = response;
          console.log(response);
        });
       }
      };

      //Reservation Change
      $scope.change = function() {
        console.log($scope.changeReservation);
        $scope.changeReservation.serviceid = serviceID;
        $http.post('/change', $scope.changeReservation).then(function(response) {
          console.log("hello2");
          $scope.change2 = response;
          console.log(response);
        });
      };


      //Reservation Delete
      $scope.delete = function() {
        console.log($scope.deleteReservation.delete);
        $scope.deleteReservation.serviceid = serviceID;
        $http.post('/delete', $scope.deleteReservation).then(function(response) {
          console.log("hello3");
          $scope.delete2 = response;

        });
      };

      //Redirection to checkout page from reservation
      $scope.redirect = function() {
        if (typeof $scope.sarah == 'undefined') {
          $scope.noReservation = "Please select a reservation before paying.";
        }
        else {
          if ($scope.sarah.data == "You've reserved the slot. Please proceed to pay and get your reservation confirmation.") {
            $location.url('/checkout');
          }
          else {
          $scope.noReservation = "Please select a reservation before paying.";}
        }


      };



    }]);
}());
