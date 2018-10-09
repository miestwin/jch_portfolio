const express = require('express');
const router = express.Router();

/**
 * GET main page
 */
router.get('/', function (req, res ,next) {
    res.render('index', { works: true })
});

module.exports = router;