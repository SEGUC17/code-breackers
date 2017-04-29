app.controller("NavCtrl", function($rootScope, $scope, $http, $location) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        //$location.url("/home");
      });
  }
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location) {
  $scope.signup = function(user) {

    // TODO: verify passwords are the same and notify user
    if (user.password == user.password2) {
      $http.post('/signup', user)
        .success(function(user) {
          $rootScope.currentUser = user;
          $location.url("/profile");
        });
    }
  }
});


app.controller("SignUpSPCtrl", function($scope, $http, $rootScope, $location) {
  $scope.signupSP = function(serviceprovider) {

    // TODO: verify passwords are the same and notify user
    if (serviceprovider.password == serviceprovider.password2) {
      $http.post('/signupsp', serviceprovider)
        .success(function(serviceprovider) {
          $rootScope.currentserviceProvider = serviceprovider;
          $location.url("/profilesp");
        });
    }
  }
});


app.controller("LoginCtrl", function($location, $scope, $http, $rootScope) {
  $scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $location.url("/profile");
      });
  }
});