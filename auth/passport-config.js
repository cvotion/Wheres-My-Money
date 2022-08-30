const localStrategy = require('passport-local')//.Strategy;
const googleStrategy = require('passport-google-oidc')
const bcrypt = require('bcryptjs');
const db = require('../models')

const init = (passport) => {

    passport.use(new localStrategy({usernameField: 'email'}, async (email, password, done) => {
        try {
            let records = await db.users.findAll({where: {email}})

            if (records){
                let record = records[0]

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

    // passport.use(new googleStrategy({
    //     clientID:     GOOGLE_CLIENT_ID,
    //     clientSecret: GOOGLE_CLIENT_SECRET,
    //     callbackURL: "http://localhost:3001/auth/google/callback",
    //     passReqToCallback   : true
    // }, authUser))

    // authUser = (request, accessToken, refreshToken, profile, done) => {
    //     return done(null, profile);
    // }

    passport.serializeUser((user, done) => {
        
        done(null, user.id)
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