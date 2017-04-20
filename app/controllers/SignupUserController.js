(function(){
      angular.module(‘loginApp’)
  .controller('SignupUserController', ['$scope', '$http', function($scope, $state, $http){
          
          $scope.createUser = function(){
              console.log($scope.newUser);
              $http.post(’Signup’, $scope.newUser).then(function(response){
              
              }).error(function(error){
                  console.log(error);
              })
          }
      }]);
  }());