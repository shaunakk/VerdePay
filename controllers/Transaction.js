const StellarSDK = require('stellar-sdk');
const server = new StellarSDK.Server('https://horizon-testnet.stellar.org');

module.exports = (req, res) => {
    const { toSecret, fromSecret, amount } = req.query;
    const receiver = StellarSDK.Keypair.fromSecret(toSecret);
    const sender = StellarSDK.Keypair.fromSecret(fromSecret);
    let transaction;

    server.loadAccount(receiver.publicKey())
          .then(() => {
              return server.loadAccount(sender.publicKey());
          })
          .then(sourceAccount => {
              transaction = new StellarSDK.TransactionBuilder(sourceAccount)
                                          .addOperation(StellarSDK.Operation.payment({
                                              destination: receiver.publicKey(),
                                              asset: StellarSDK.Asset.native(),
                                              amount
                                          }))
                                          .addMemo(StellarSDK.Memo.text('Transaction'))
                                          .build();
              transaction.sign(sender);

              return server.submitTransaction(transaction);
          })
          .then(result => {
              console.log('Success: ', result);
          })
          .catch(error => {
              console.log('Error boi:', error);
          })




}