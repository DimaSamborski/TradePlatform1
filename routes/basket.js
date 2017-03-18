'use strict';
const express = require('express');
const router = express.Router();

var linksList = ['home', 'office', 'basket'];

router.get('/basket', function (req, res, next) {
    res.render('basket', {title: 'home', links: linksList, activePage: 'basket'});
    next();
});

module.exports = router;