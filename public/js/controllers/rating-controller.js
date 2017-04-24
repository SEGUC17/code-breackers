(function(){
    angular.module('myApp')
.controller('RatingController', ['$scope', '$state', '$http', function($scope, $state, $http){




       $http.get('/api/rating/').then(function(response) {
        //console.log(response.data);
        $scope.rating = response.data;
       });


    }]);
}());
