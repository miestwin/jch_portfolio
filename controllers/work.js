const express = require('express');
const router = express.Router();

/**
 * GET work page
 */
router.get('/:id', function (req, res, next) {
    res.render('work', { layout: 'layout' })
});

module.exports = router;