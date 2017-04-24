(function(){
    angular.module('myApp', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){

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

              .state('reserve', {
              url: "/service/:id/reserve",
              templateUrl: "public/views/reservation.html",
              controller: "ServiceController"

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

           .state('updateUser', {
           url: "/api/updateUser",
           templateUrl: "public/views/updateUser.html",
           controller: "UController"

          })

            .state('deleteOffer', {
           url: "/service",
           templateUrl: "public/views/home.html",
           // controller: "UController"

          })

            .state('serviceProvider', {
                url: "/serviceProvider",
                templateUrl: "public/views/serviceProvider.html",
                controller: "ServiceProviderController"
            })            




        })
}());
