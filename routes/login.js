
const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../auth');

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

router.get('/login', auth.unauthReq, (req,res) => {

   
    res.render('login')
})

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res){
        res.redirect('/')
    }
)

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
})
module.exports = router;
