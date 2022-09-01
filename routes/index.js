
const express = require('express');
const router = express.Router();
const auth = require('../auth');
const db = require('../models');



router.get('/', auth.authReq, async (req,res) => {

    let results = await db.records.findAll({where: {'userID': req.user.id}})
    // console.log(results);
    // updateDoughnut(results)
   
    res.render('index', {
        user: req.user,
        transactions: results
    })
})


module.exports = router;
