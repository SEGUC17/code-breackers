var User = require('./models/user');
var sp = require('./models/sp');

module.exports = function(app, passport){







  app.get('/signupSP', function(req, res){
        res.render('signupSP.ejs', { message: req.flash('signupMessage') });
    });
  app.post('/signupSP', passport.authenticate('local-signup2', {
        successRedirect: '/',
        failureRedirect: '/signupSP',
        failureFlash: true
    }));
app.get('/index', function(req, res){
        res.render('index.ejs', { message: req.flash('signupMessage') });
    });
 








    app.get('/', function(req, res){
        res.render('index.ejs');
    });

    app.get('/login', function(req, res){
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', function(req, res){
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function(req, res){
        res.render('profile.ejs', { user: req.user });
    });



    app.get('/:email/:password', function(req, res){
        var newUser = new User();
        newUser.local.email = req.params.email;
        newUser.local.email = req.params.email;
        console.log(newUser.local.email + " " + newUser.local.password);
        newUser.save(function(err){
            if(err)
                throw err;
        });
        res.send("Success!");
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');
}