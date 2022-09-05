const express = require('express');
const router = express.Router();
const auth = require('../auth');
const db = require('../models');

router.get('/api', auth.authReq, async (req,res) => {
    console.log('retreiving data from the api');

    try {
        let records = await db.records.findAll({where :{ 'userID': req.user.id }})
        res.status(200).json({records})

    } catch (error) {
        res.status(400).json({error})
    }
})

router.post('/api', auth.authReq, async (req,res) => {
    console.log('posting data to the api');

    try {

        let userID = req.user.id
        let { date, description, amount, type, category } = req.body

        let result = await db.records.create({
            date,
            description,
            amount,
            type,
            category,
            userID
        })

        let records = await db.records.findAll({where: {'userID': req.user.id }})

        res.status(201).json({records})

    } catch (error) {
        res.status(400).json({error})
    }

})

router.put('/api', auth.authReq, async (req,res) => {
    console.log('editing data with the api');

    try {
        let { date, description, amount, type, category, rowID } = req.body

        let response = await db.records.update({
            date,
            description,
            amount,
            type,
            category,
        }, {where: {id: rowID}})

        let records = await db.records.findAll() //{where: {'userID': req.user.id }}
   
        res.json({records})
    } catch (error) {
        res.status(400).json({error})
    }
    
})

router.delete('/api', auth.authReq, async (req,res) => {

    console.log('deleting data with the api');

    try {
        let { rowID } = req.body
        let result = await db.records.destroy({where: {id: rowID}})
   
        let records = await db.records.findAll({where: {'userID': req.user.id }})

        res.status(200).json({records})
    } catch (error) {
        res.status(400).json({error})
    }
    
})

module.exports = router;


