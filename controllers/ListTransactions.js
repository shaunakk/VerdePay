const PayPal = require('paypal-classic-api')
const paypal1 = require('paypal-rest-sdk')
const { promisify } = require('es6-promisify');
const credentials = {
    username: 'verdepay2018-facilitator_api1.gmail.com',
    password: 'UUHG5SUUTXQRVNAQ',
    signature: 'ALvW1LfJ5RaibyQPxHIpppfeMDgoASKQk-omwu3KVIr0AHZiXi306Hk9'
};

const paypal = new PayPal(credentials);
module.exports = async (req, res) => {
    let amount = 0;
    const call = promisify(paypal.call);
    const transactions = await call('TransactionSearch', {
        StartDate: '2012-06-11T10:50:44.681Z'
    });

    transactions.objects.forEach(value => {
        amount += Number(value.AMT) * 0.005;
    })
    res.json({
        transactions: transactions.objects
    })
}