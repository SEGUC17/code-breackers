(function(){
      angular.module(‘loginApp’)
  .controller('loginController', ['$scope', '$http', function($scope, $state, $http){
          
          $scope.createUser = function(){
              console.log($scope.newUser);
              $http.post(’login’, $scope.newUser).then(function(response){
              
              }).error(function(error){
                  console.log(error);
              })
          }
      }]);
  }());