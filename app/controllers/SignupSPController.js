(function(){
      angular.module(‘loginApp’)
  .controller('SignupSPController', ['$scope', '$http', function($scope, $state, $http){
          
          $scope.createUser = function(){
              console.log($scope.newUser);
              $http.post(’SignupSP’, $scope.newUser).then(function(response){
              
              }).error(function(error){
                  console.log(error);
              })
          }
      }]);
  }());