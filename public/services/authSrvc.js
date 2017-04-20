(function(){
  app.service('authSrv' , authentication);
  authentication.$inject = ['http'];
  function authentication($http) {

    var review = function (review) {
      return $http.post("/review/createReview" , review);

    }
    var complaint = function (complaint) {
      return $http.post("/complaint/createComplaint" , complaint);

    }
    return{
      review : review,
      complaint : complaint

    };

  }
})();
