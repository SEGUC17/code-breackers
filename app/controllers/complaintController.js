let Complaint = require('/home/youssef/Desktop/folder/app/models/complaint.js');


let ComplaintController  = {
  createComplaint: function(req, res){

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
