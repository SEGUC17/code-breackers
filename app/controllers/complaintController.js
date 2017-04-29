let Complaint = require('../models/complaint.js');


let ComplaintController  = {
  createComplaint: function(req, res){
     console.log("cnjkewn");
    let complaint = new Complaint(req.body);

    complaint.save(function(err, complaint){
        if(err){
            res.send(err.message)
            console.log(err);
        }
        else{
            console.log(complaint);
            res.redirect('/');
        }
    })
  },

}

module.exports = ComplaintController;
