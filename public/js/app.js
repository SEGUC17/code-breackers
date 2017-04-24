(function() {
  angular.module('myApp', ['ui.router', 'ngMessages'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('search', {
          url: "/search",
          templateUrl: "public/views/search.html",
          controller: "SearchController"
        })

        .state('service', {
          url: "/service/:id",
          templateUrl: "public/views/service.html",
          controller: "ServiceController"
        })

        .state('home', {
          url: "/",
          templateUrl: "public/views/home.html",
          controller: "SearchController"

        })

        .state('reserven', {
          url: "/service/:id/reservation",
          templateUrl: "public/views/reservation.html",
          controller: "ServiceController"

        })

        .state('reservenow', {
          url: "/service/:id/reserve",
          templateUrl: "public/views/reserve.html",
          controller: "ReservationController"

        })

        .state('change', {
          url: "/service/:id/change",
          templateUrl: "public/views/change.html",
          controller: "ReservationController"

        })

        .state('delete', {
          url: "/service/:id/delete",
          templateUrl: "public/views/delete.html",
          controller: "ReservationController"

        })

        .state('checkout', {
          url: "/service/:id/checkout",
          templateUrl: "public/views/checkout.html",
          controller: "PaymentController"

        })

        .state('reviews', {
          url: "/service/:id/reviews",
          templateUrl: "public/views/reviews.html",
          controller: "ServiceController"

        })


         .state('createService', {
            url: "/api/addService",
            templateUrl: "public/views/createService.html",
            controller: "SController"

           })

           .state('updateService', {
           url: "/api/updateService",
           templateUrl: "public/views/updateService.html",
           controller: "SController"

          })

    })
}());
