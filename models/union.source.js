const chinaPay = require('china-pay')('unionpay');


class UnionPay {
    constructor(amount, out_trade_num) {
        this.amount = amount;
        this.out_trade_num = out_trade_num;
    }

    async configEnv() {
    }

    async makePayment() {

    }
}