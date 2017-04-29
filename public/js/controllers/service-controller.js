(function(){
    angular.module('myApp')
.controller('ServiceController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams){



       $http.get('/api/service/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        $scope.service = response.data[0];
       });



      //  $scope.reviewsubmit = function() {
      //  console.log("fvismiovmsimi");
      //  console.log($scope.review);
      //  $http.post('/createReview', $scope.review).then(function(response) {
       //
      //       });
       //
      //     };


          $scope.createComplain = function() {
          console.log("createComplain");
          console.log($scope.complain);
          $http.post('/complaint/createComplaint', $scope.complain).then(function(response) {

               });

             };

             var refresh = function() {
               console.log("cannot get")
               $http.post('/getReviews').then(function(response) {
                 console.log("I got the reviews I requested");
                 console.log(response.data);
                 $scope.reviews = response.data;
               });
             };

             refresh();





    }]);
}());
