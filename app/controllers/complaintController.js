let Complaint = require('../models/complaint.js');
let complaint2Controller  = {
  createComplaint: function(req, res){
    console.console.log("req.body>>" + req.body.complaintName);
    complaint.findOne({complaintName : req.body.complaintName}) , function(err, complaints){
      if(err){
        res.status(500).json(err);
      }
      if(reviews){
        res.status(401).json({
          "message" : "Complaint already exists"
        });
      }
      else{
        var complaint = new complaint();
        complaint.complaintName = req.body.complaintName;
      }
    };
