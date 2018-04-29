const paypal = require('paypal-classic-api')
const credentials = {
    username: 'verdepay2018-facilitator_api1.gmail.com',
    password: 'UUHG5SUUTXQRVNAQ',
    signature: 'ALvW1LfJ5RaibyQPxHIpppfeMDgoASKQk-omwu3KVIr0AHZiXi306Hk9'
};
 paypal.call('TransactionSearch',
        { StartDate: '2012-06-11T10:50:44.681Z' },
        function (error, transactions) {
            if (error) {
                console.error('API call error: ' + error);
            } else {
                console.log(transactions);
            }
        });
