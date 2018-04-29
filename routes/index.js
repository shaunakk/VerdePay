const express = require('express');
const router = express.Router();
const issueController = require('../controllers/Issue');
const transactionController = require('../controllers/Transaction');
const webhookController = require('../controllers/Webhook');


/* GET home page. */
router.get('/verdepay/issuefunds', issueController);
router.get('/verdepay/transaction/:toSecret/:fromSecret/:amount', transactionController);

router.post('/verdepay/webhook', webhookController);

module.exports = router;
