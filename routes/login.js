
const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
})
module.exports = router;
