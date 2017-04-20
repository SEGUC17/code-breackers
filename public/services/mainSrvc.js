app.factory('mainSrvc' , function(){
  return{
    setReview : function(review){
      this.review = review;
    },
    getReview : function() {
      return this.review;
    },
    setComplaint : function(complaint){
      this.complaint = complaint;
    },
    getComplaint : function() {
      return this.complaint;
    }
  }
})
