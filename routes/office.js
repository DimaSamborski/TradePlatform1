'use strict';
const express = require('express');
const router = express.Router();

var linksList = ['home', 'office', 'basket'];

router.get('/office', function (req, res, next) {
    res.render('office', {title: 'office', links: linksList});
    next();
});

module.exports = router;