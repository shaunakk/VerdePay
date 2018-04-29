const StellarSDK = require('stellar-sdk');
const request = require('request');
const server = new StellarSDK.Server('https://horizon-testnet.stellar.org');

module.exports = (req, res) => {
    const address = StellarSDK.Keypair.random();
    const balances = {};
    request.get({
        url: `https://friendbot.stellar.org?addr=${address.publicKey()}`,
    }).on('response', (response) => {
        server.loadAccount(address.publicKey())
              .then(account => {
                  res.json({ secretKey: address.secret(), publicKey: address.publicKey(), balance: account.balances[0].balance, type: "lumens" })
              });
    })

    // res.json(balances)





}