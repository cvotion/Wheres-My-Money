const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('/form', auth.authReq, (req, res) => {
    res.render('transaction-form', {user: req.user})
})

module.exports = router;