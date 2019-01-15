const express = require('express');
const router = express.Router();

/* GET home page. */
const unionRouter = require('./api/union.api');
router.use('/union', unionRouter);

module.exports = router;
