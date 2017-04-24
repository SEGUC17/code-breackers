(function(){
    angular.module('myApp')
.controller('ServiceController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams){




       $http.get('/api/service/' + $stateParams.id).then(function(response) {
        //console.log(response.data);
        $scope.service = response.data[0];
       });

       $http.post('/api/rating/' + $stateParams.id).then(function(response) {
        //console.log(response.data);
        $scope.rate = response.data [0];
       });

       $http.get('/api/rating').then(function(response) {
       //console.log(response.data);
       });

    }]);
}());
