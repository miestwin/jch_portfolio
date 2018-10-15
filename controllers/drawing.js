const express = require('express');
const router = express.Router();

/**
 * GET main page
 */
router.get('/', function (req, res ,next) {
    res.render('index', { drawing: true });
});

router.get('/gallery/slides', function (req, res, next) {
    res.render('index', {});
});

module.exports = router;