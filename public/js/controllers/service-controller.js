(function(){
    angular.module('myApp')
.controller('ServiceController', ['$scope', '$state', '$http', '$stateParams','$window', function($scope, $state, $http, $stateParams, $window){

       $http.get('/api/service/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        $scope.service = response.data[0];
        var Begin= response.data[0].beginWorkingHours;


       });



    }]);
}());
