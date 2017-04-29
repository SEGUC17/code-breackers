var app = angular.module("PassportApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/home');

            $stateProvider
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

        });




// app.config(function($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: 'views/home.html'
//     })
//     .when('/login', {
//       templateUrl: 'views/login.html',
//       controller: 'LoginCtrl'
//     })
//     .when('/signup', {
//       templateUrl: 'views/signup.html',
//       controller: 'SignUpCtrl'
//     })

//     .when('/signupsp', {
//       templateUrl: 'views/signupsp.html',
//       controller: 'SignUpCtrl'
//     })

//     .when('/profile', {
//       templateUrl: 'views/profile.html',
//       resolve: {
//         logincheck: checkLoggedin
//       }
//     })

//     .when('/profilesp', {
//       templateUrl: 'views/profilesp.html',
//       resolve: {
//         logincheck: checkLoggedin
//       }
//       })
//     .otherwise({
//       redirectTo: '/home'
//     })
// });

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}