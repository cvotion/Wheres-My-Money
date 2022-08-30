
const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('/', (req,res) => {

   
    res.render('index')
})


module.exports = router;
