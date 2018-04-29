const fs = require("fs");
module.exports = (req, res) => {
    const transactionAmount = Number(req.body.resource.amount.total);
    const fee = transactionAmount * 0.005;
    let contents = String(fs.readFileSync('../data.json'));
    contents = JSON.parse(contents);
    contents.transactions.push({
        "time": req.body.create_time,
        fee,
        transactionAmount
    });
    fs.writeFileSync('../data.json', JSON.stringify(contents));


    res.json({})
}