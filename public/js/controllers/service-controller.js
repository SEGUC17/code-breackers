(function(){
    angular.module('myApp')
.controller('ServiceController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams){




       $http.get('/api/service/' + $stateParams.id).then(function(response) {
        //console.log(response.data);
        $scope.service = response.data[0];
       });

       

    }]);
}());
