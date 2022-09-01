
const express = require('express');
const router = express.Router();
const auth = require('../auth');
const db = require('../models');

router.get('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
   
    res.json({records})
})

router.post('/api', auth.authReq, async (req,res) => {
    console.log('accessing the api');

    try {

        let userID = req.user.id
        let { date, description, amount, type } = req.body

        let records = await db.records.create({
            date,
            description,
            amount,
            type,
            category,
            userID
        })
        res.status(201).json({records})

    } catch (error) {
        res.status(400).json({error})
    }
    
   
})

router.put('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
   
    res.json({records})
})

router.delete('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
   
    res.json({records})
})

module.exports = router;
