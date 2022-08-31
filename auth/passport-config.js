const localStrategy = require('passport-local')//.Strategy;
const GoogleStrategy = require('passport-google-oidc')
const bcrypt = require('bcryptjs');
const db = require('../models')

GOOGLE_CLIENT_ID = '907968964497-e8jrp7mfu09fadm1ep4iibefm0t6tkgm.apps.googleusercontent.com'
GOOGLE_CLIENT_SECRET = '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'

const init = (passport) => {

    passport.use(new localStrategy({usernameField: 'email'}, async (email, password, done) => {
        try {
            console.log(password);
            let records = await db.users.findAll({where: {email:email}})
            console.log(records);

            if (records){
                let record = records[0]
                console.log(record);
                

                bcrypt.compare(password, record.password, (err, match) => {
                    if(match){
                        console.log('passwords match!');
                        return done(null, record)
                    }
                    else{
                        console.log('Passwords didnt match');
                        return done(null, false)
                    }
                })

            }
            else{

                //username doesnt match
                return done(null, false)
            }

        } catch (error) {
            //db error
            return done(error)
        }
    }))

    //! in production mode we need to import these variables from a .env file
    // passport.use(new googleStrategy({
    //     clientID: '907968964497-e8jrp7mfu09fadm1ep4iibefm0t6tkgm.apps.googleusercontent.com',
    //     clientSecret: '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',
    //     callbackURL: "http://localhost:3000/login",
    //     passReqToCallback: true
    // }, authUser))

    // passport.use(new GoogleStrategy({
    //     clientID: process.env[GOOGLE_CLIENT_ID],
    //     clientSecret: process.env[GOOGLE_CLIENT_SECRET],
    //     callbackURL: 'https://localhost:3000/google/callback',
    //     passReqToCallback: true
    //   },
    //   function(issuer, profile, cb) {
    //     db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [ //! check if in db
    //       issuer,
    //       profile.id
    //     ], function(err, cred) {
    //       if (err) { return cb(err); }
    //       if (!cred) {
    //         // The Google account has not logged in to this app before.  Create a
    //         // new user record and link it to the Google account.
    //         db.run('INSERT INTO users (name) VALUES (?)', [ //! create a new user !\\
    //           profile.displayName
    //         ], function(err) {
    //           if (err) { return cb(err); }
    
    //           var id = this.lastID;
    //           db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
    //             id,
    //             issuer,
    //             profile.id
    //           ], function(err) {
    //             if (err) { return cb(err); }
    //             var user = {
    //               id: id.toString(),
    //               name: profile.displayName
    //             };
    //             return cb(null, user);
    //           });
    //         }); //!\\
    //       } else {
    //         // The Google account has previously logged in to the app.  Get the
    //         // user record linked to the Google account and log the user in.
    //         db.get('SELECT * FROM users WHERE id = ?', [ cred.user_id ], function(err, user) {
    //           if (err) { return cb(err); }
    //           if (!user) { return cb(null, false); }
    //           return cb(null, user);
    //         });
    //       }
    //     });
    //   }
    // ));

    // passport.use(new GoogleStrategy({
    //     clientID: process.env[GOOGLE_CLIENT_ID],
    //     clientSecret: process.env[GOOGLE_CLIENT_SECRET],
    //     callbackURL: 'https://localhost:3000/google/callback',
    //     passReqToCallback: true
    //   },
    //   function(req, accessToken, refreshToken, profile, done){
        
    //   }))

    // authUser = (request, accessToken, refreshToken, user, done) => {
    //     return done(null, user);
    // }

    passport.serializeUser((user, done) => {
        console.log(user.dataValues);
        done(null, user.dataValues.id)
    })

    passport.deserializeUser(async (id, done) => {
        try {
            let result = await db.users.findByPk(id)
            if(result){
                done(null, result)
            }
            else{
                done(null, false)
            }
        } catch (error) {
            done(null, result)
        }
    })
}

module.exports = init