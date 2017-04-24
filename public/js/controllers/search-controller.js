(function(){
    angular.module('myApp')
   .controller('SearchController', ['$scope', '$state', '$http', function($scope, $state, $http){

     var refresh = function() {
       $http.get('api/serviceslist').then(function(response) {
         console.log("I got the data I requested");
         console.log(response.data);
         $scope.services = response.data;
       });
     };

     refresh();


       $scope.searchByKeyword = function() {
       console.log("nkjwndjkwnqknkqHOOORAAY");
       console.log($scope.search);
       $http.post('api/search', $scope.search).then(function(response) {
       console.log(response.data);
       $scope.services = response.data;
       });

     };

       $scope.searchByCategory = function(){
       console.log("CATEGORRRRRRRY");
       console.log($scope.selectpicker);
       $http.post('api/searchByCategory', $scope.selectpicker).then(function(response) {
       console.log(response.data);
       $scope.services = response.data;

     });
   };

     $scope.searchByLocation = function(){
     console.log("LOCAAATIOOOON");
     console.log($scope.selectpicker);
     $http.post('api/searchByLocation', $scope.selectpicker).then(function(response) {
     console.log(response.data);
     $scope.services = response.data;

   });
 };

   $scope.searchByDate = function(){
   console.log("DATEEEE");
   $http.post('api/searchByDate').then(function(response) {
   console.log(response.data);
   $scope.services = response.data;

 });
};

  $scope.searchByOffers= function(){
  console.log("OFFEEEERS");
  $http.post('api/searchByOffers').then(function(response) {
  console.log(response.data);
  $scope.services = response.data;

});
};

  $scope.searchByRating = function(){
  console.log("OFFEEEERS");
  $http.post('api/searchByRating').then(function(response) {
  console.log(response.data);
  $scope.services = response.data;

});
};



    }]);
}());
