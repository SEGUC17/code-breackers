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

                .state('updateUser', {
                url: "/api/updateUser",
                templateUrl: "public/views/updateUser.html",
                controller: "UController"

            })

                .state('deleteOffer', {
                url: "/service",
               templateUrl: "public/views/home.html",
                 controller: "UController"

            })

                .state('serviceProvider', {
                url: "/serviceProvider",
                templateUrl: "public/views/serviceProvider.html",
                 controller: "ServiceProviderController"
           })       
            .state('userProfile', {
                url: "/userProfile",
                templateUrl: "public/views/userProfile.html",
                 controller: "ServiceProviderController"
           })               
              .state('signup', {
                url: "/signup",
                templateUrl: "public/views/signup.html",
                controller: "SignUpCtrl"
            })

                .state('login', { 
                url: "/login",
                templateUrl: "public/views/login.html",
                controller: "LoginCtrl"
            })

                .state('signupsp', {
                url: "/signupsp",
                templateUrl: "public/views/signupsp.html",
                controller: "SignUpSPCtrl"

            })

        
                .state('home', {
                url: "/home",
                templateUrl: "public/views/home.html",
                // controller: "ServiceController"

            })

    })
}());
