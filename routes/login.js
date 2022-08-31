
const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../auth');
const db = require('../models');  //connected with the database models folder


// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'  

// }))

router.post('/login', (req, res) => {
    let {email, password} = req.body;
    console.log("login route here")
    console.log(email);
    console.log(password);
    //check db for correct username, password
    //re-encrypting the password  check to see if hashes match
    // let user = users.find(userRecord =>{

    //     return userRecord.email ==email && userRecord.password == password
    // })

    //place the user's id on the session
    // if(user){ //object was returned into user variable and a match was found
        //place the user's id on the session
    //     req.session.isAuthenticated = true;
    //     res.redirect('/')
    // }
    // else{
        //no user found
        //redirect them to log back in
    //     res.redirect('/register')
    // }
})




router.get('/login', auth.unauthReq, (req,res) => {

   
    res.render('login')
})

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
})
module.exports = router;
