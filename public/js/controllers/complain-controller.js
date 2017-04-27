(function(){
    angular.module('myApp')
.controller('complaintController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams){

  $scope.createComplain = function() {
  console.log("createComplain");
  console.log($scope.complain);
  $http.post('/complaint/createComplaint', $scope.complain).then(function(response) {

       });

     };

   }]);
}());
