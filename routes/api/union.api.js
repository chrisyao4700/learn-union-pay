const express = require('express');
const router = express.Router();
const YTUnionAction = require('../../actions/union.action');


/* GET home page. */
router.post('/', async function (req, res, next) {
    // console.log(req.body);
    // res.json({status: false, message: 'REACHED API UNION', request_body: req.body});

    // const merId = '777290058166096';

    const {amount, out_trade_num} = req.body;
    console.log('amount', amount);
    console.log('out_trade_num', out_trade_num);


    // console.log(await YTUnionAction.makePayment(merId, amount || 1));
});

module.exports = router;
