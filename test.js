const StellarSDK = require('stellar-sdk');
const request = require('request');
const server = new StellarSDK.Server('https://horizon-testnet.stellar.org');

const poopy = () => {
    const addressSend = StellarSDK.Keypair.fromSecret('SAHG3YAFKBENGJNIFENGEAIGLJVGKGUISYHRLIIXKQ3S5VS6U4LM6TIL');
    const addressReceive = StellarSDK.Keypair.fromSecret('SBVNRIITZTHETJOFFCQ7TZRMPRIJRE5YRHD2HVWD3FFF3QBC6LE5FYND')

    console.log('Sending address:', addressSend.publicKey());
    console.log('Receiving address', addressReceive.publicKey());
    

    // res.json(balances)





}

poopy();