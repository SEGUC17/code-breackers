(function(){
    angular.module('myApp')
.controller('ServiceController', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams){

        var serviceID = $stateParams.id;
        console.log(serviceID);
        var n = serviceID.toString();
        console.log("mxkwnjwWWWWWWWW");
        console.log(n);



       $http.get('/api/service/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        $scope.service = response.data[0];
       });

    }]);
}());
