
const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');
const auth = require('../auth');


router.get('/register', auth.unauthReq, (req,res) => {


    res.render('register')
})

router.post('/register', async (req,res) => {
    console.log('Registering user');

    try {
        //scrape info from the header
        let { email, password, username } = req.body

        //encrypt password
        password = bcrypt.hashSync(password, 8)

        //create user in db
        let insertRecord = await db.users.create({
            username,
            email,
            password
        })
        
        res.redirect('/login')

    } catch (error) {
        console.log(error);
        
        res.status(404).render('registration', {
            error: `Error: can't register username`
        })
    }
})



module.exports = router;
