
const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');
const auth = require('../auth');


router.get('/register', auth.unauthReq, (req,res) => {


    res.render('register')
})

router.post('/registration', async (req,res) => {
    console.log('Registering user');

    try {
        //scrape info from the header
        let { email, password, userName } = req.body

        //encrypt password
        password = bcrypt.hashSync(password, 8)

        //create user in db
        let insertRecord = await db.users.create({
            userName,
            email,
            password,
            // roleID: 1
        })
        
        res.redirect('/login')

    } catch (error) {
        console.log(error);
        
        res.status(404).render('registration', {
            error: 'Error: cant register username'
        })
    }
})



module.exports = router;
