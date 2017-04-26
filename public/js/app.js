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
              url: "/service/:id/reservation",
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


        })
}());
