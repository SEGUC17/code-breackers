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

             .state('complain', {
             url: "/service/:id/complain",
             templateUrl: "public/views/complains.html",
             controller: "complaintController"

            })


             .state('reviews', {
             url: "/service/:id/reviews",
             templateUrl: "public/views/reviews.html",
             controller: "ReviewController"

            })

        })
}());
