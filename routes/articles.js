const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('In articles');
});

module.exports = router;