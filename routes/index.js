'use strict';
const express = require('express');
const router = express.Router();


// connect to mongoose and select data
    //code

//костилі
var linksList = ['home', 'office', 'basket'];

var randomNumber = function (minNumber, maxNumber) {
    var random = Math.random() * maxNumber;
    return random >= minNumber ? random : randomNumber(minNumber, maxNumber);
};

var ProductsList = [];

for (var i = 0; i <= 4; i++) {
    ProductsList[i] = {
        name: 'Product ' + i,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        imgSrc: 'https://pp.userapi.com/c637426/v637426187/35618/p-MdCnWR0Lk.jpg',
        id: Math.round(randomNumber(2, 80))
    }
}

var activeUser = [
    {
        name: 'Petya',
        year: 46,
        id: Math.round(randomNumber(18,60))
    }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'home', links: linksList, activePage: 'home', newProducts: ProductsList, activeUsers: activeUser});
    next();
});

module.exports = router;
