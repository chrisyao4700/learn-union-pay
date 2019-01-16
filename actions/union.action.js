// const fs = require('fs');
// const path = require('path');
// const UnionPay = require('node-unionpay');


const UnionSource = require('../models/union.source');

// sdk.revoke({
//   orderId: 'W165416234563',
//   origQryId: '20180812300382099911',
//   txnAmt: '1',
// }).then(res => console.log(res));

// sdk.refund({
//   orderId: 'W165416234561',
//   origQryId: '20180812158110755741',
//   txnAmt: '1',
// }).then(res => console.log(res));

// sdk.query({
//   // queryId: '20180812158110755741',
//   orderId: 'W165416234561',
//   // txnTime: '20180812051852',
// }).then(res => console.log(res));

// sdk.downloadBill({
//   settleDate: '0119',
//   fileType: '00',
// }).then(res => {
//   console.log(res);
//   const zlib = require('zlib');
//   fs.writeFileSync(res.fileName, zlib.inflateSync(new Buffer(res.fileContent, 'base64')));
// });


class YTUnionAction {

//     static async makePayment(merId) {
//
// // var privateKey = fs.readFileSync(path.resolve(__dirname, '../bin/acp700000000000001.pem')); //商户测试私钥,使用openssl从pfx文件中生成并去除密码
//         const privateKey = fs.readFileSync(path.resolve(__dirname, './acp_test_sign.pem')); // 私钥
// // var publicKey = fs.readFileSync(path.resolve(__dirname, '../bin/acp20151027.cer')); //银联测试公钥
//         const publicKey = fs.readFileSync(path.resolve(__dirname, './verify_sign_acp.cer')); // 公钥
//
//         const sdk = new UnionPay({
//             privateKey,
//             publicKey,
//             merId,
//             certId: '40220995861346480087409489142384722381',
//             termId: '00000011',
//             frontUrl: 'https://www.chrisyao0908.com',
//             backUrl: 'http://www.rest.org',
//             sandbox: true,
//             openLog: true,
//         });
//
//
//         return await sdk.microPay({
//             orderId: 'W165416123121',
//             qrNo: '6222674044229453590',
//             txnAmt: '1',
//         })
//     }


    static async makePaymentWithSource(amount, out_trade_num) {
        try {
            const config = {
                merId: '777290058136713', //商户id
                font_trans_url: 'https://101.231.204.80:5000/gateway/api/frontTransReq.do', //网关跳转至银联平台支付页面地址
                sigle_query_url: 'https://101.231.204.80:5000/gateway/api/queryTrans.do', //单笔查询请求地址
                sign_cert_dir: __dirname + '/certificates', //签名证书路径
                certId: '40220995861346480087409489142384722381',
                sign_cert_pwd: '0000000', //签名证书密码
                sign_cert_path: __dirname + '/certificates/700000000000001_acp.pfx', //签名用私钥证书
                validate_cert_path: __dirname + '/certificates/verify_sign_acp.cer', //验签用银联公钥证书
            };
            //const sdk = new UnionSource({amount, out_trade_num}, config, );

            return new Promise((resolve, reject) => {

            });
        } catch (e) {
            throw e;
        }
    }

}

module.exports = YTUnionAction;

