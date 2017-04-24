(function(){
    angular.module('myApp')
   .controller('ReviewController', ['$scope', '$state', '$http','$stateParams' function($scope, $state, $http){



    $http.get('/api/service/' + $stateParams.id).then(function(response) {
     console.log(response.data);
     $scope.service = response.data[0];
    });

     $scope.reviewsubmit = function() {
     console.log("fvismiovmsimi");
     console.log($scope.review);
     $http.post('/review/createReview', $scope.review).then(function(response) {

     });

   };







   }]);
}());
