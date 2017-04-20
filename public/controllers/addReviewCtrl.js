app.controller('addReviewCtrl',function($scope, $location, authSrv, mainSrv){

  $scope.review = function(){
    var deferred = Q.defer();
      // fields to update
    var set = {
        reviewName: review.reviewName,

    };
    db.review.insert(
        set,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

return deferred.promise;
      }
  }
});
