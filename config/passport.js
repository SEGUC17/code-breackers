var LocalStrategy = require('passport-local').Strategy;


var User = require('../app/models/user');
var ServiceProvider = require('../app/models/serviceProvider');
module.exports = function(passport) {


    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });


    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        process.nextTick(function(){
            User.findOne({'local.email': email}, function(err, user){
                if(err)
                    return done(err);
                if(user){
                    return done(null, false, req.flash('signupMessage', 'That email already taken'));
                } else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = password;
                    newUser.local.username = req.body.username;
                    newUser.local.birthday = req.body.birthday;

                    newUser.save(function(err){
                        if(err)
                            throw err;
                        return done(null, newUser);
                    })
                }
            })

        });
    }));



    passport.use('local-signup2', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        process.nextTick(function(){
            ServiceProvider.findOne({'local.email': email}, function(err, sp){
                if(err)
                    return done(err);
                if(sp){
                    return done(null, false, req.flash('signupMessage', 'That email already taken'));
                } else {
                    var newsp = new ServiceProvider();
                    newsp.local.email = email;
                    newsp.local.password = password;
                    newsp.local.username = req.body.username;
                    
                    newsp.save(function(err){
                        if(err)
                        throw err;
                        return done(null, newsp);
                    })
                }
            })

        });
    }));



    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done){
            process.nextTick(function(){
                User.findOne({ 'local.email': email}, function(err, user){
                    if(err)
                        return done(err);
                    if(!user)
                        return done(null, false, req.flash('loginMessage', 'No User found'));
                    if(user.local.password != password){
                        return done(null, false, req.flash('loginMessage', 'inavalid password'));
                    }
                    return done(null, user);

                });
            });
        }
    ));


};
