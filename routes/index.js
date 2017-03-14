'use strict';
const express = require('express');
const router = express.Router();

var linksList = ['home', 'office', 'basket'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', links: linksList });
});

module.exports = router;
