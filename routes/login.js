
const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('/login', auth.unauthReq, (req,res) => {

   
    res.render('login')
})


module.exports = router;
