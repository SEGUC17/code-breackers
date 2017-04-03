// require dependincies
var express = require('express');
var router = express.Router();
var ratingcontroller = require('./controllers/ratingcontroller');

// add routes
router.get('/', ratingcontroller.getAllratings);


router.post('/rating', ratingcontroller.createProject);

// export router

module.exports = router;
