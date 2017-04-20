app.controller('addComplaintCtrl',function($scope, $location, authSrv, mainSrv){

  $scope.complaint = function(){
    var deferred = Q.defer();
    // fields to update
    var set = {
        complaintName: complaint.complaintName,

    };
    db.complaint.insert(
        set,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

return deferred.promise;
      }
  }
});
