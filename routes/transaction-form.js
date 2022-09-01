const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('/form', (req, res) => {
    res.render('transaction-form')
})

module.exports = router;