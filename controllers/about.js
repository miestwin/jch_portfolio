const express = require('express');
const router = express.Router();

/**
 * GET about page
 */
router.get('/', function (req, res, next) {
    res.render('about',  { about: true });
});

module.exports = router;