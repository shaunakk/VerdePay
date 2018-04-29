const webhook = require('./controllers/Webhook');

webhook({
    body: {
        resource: {
            amount: {
                total: "0.49"
            }
        }
    }
}, 'poopy')

webhook({
    body: {
        resource: {
            amount: {
                total: "0.50"
            }
        }
    }
}, 'poopy')