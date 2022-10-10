const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

// ------------ Dashboard Route ------------//
router.get('/index', ensureAuthenticated, (req, res) => res.render('index'));

module.exports = router;