(function(){
    angular.module('myApp')
.controller('serviceProvider-controller', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams){




       $http.get('ServiceProvider' + $stateParams.id).then(function(response) {
        //console.log(response.data);
        $scope.service = response.data[0];
       });

       
    }]);
}());
