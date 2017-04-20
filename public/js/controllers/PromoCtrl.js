var app = angular.module('myApp', ['ngRoute','angularRandomString']);

app.controller('PromoCtrl', function($scope, randomString){
  $scope.promo = randomString(7);
  console.log(promo);
});
