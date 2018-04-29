const express = require('express');
const router = express.Router();
const issueController = require('../controllers/Issue');
const transactionController = require('../controllers/Transaction');
const webhookController = require('../controllers/Webhook');
const listTransactions = require('../controllers/ListTransactions')


/* GET home page. */
router.get('/verdepay/issuefunds', issueController);
router.get('/verdepay/transaction/:toSecret/:fromSecret/:amount', transactionController);
router.get('/verdepay/transactions', listTransactions)

router.post('/verdepay/webhook', webhookController);

module.exports = router;
