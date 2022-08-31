
const express = require('express');
const router = express.Router();
const auth = require('../auth');
const db = require('../models');

router.get('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
   
    res.json({records})
})

module.exports = router;
