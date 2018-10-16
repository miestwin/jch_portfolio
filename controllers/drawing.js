const express = require('express');
const router = express.Router();

/**
 * GET main page
 */
router.get('/', function (req, res ,next) {
    res.render('index', { drawing: true });
});

module.exports = router;