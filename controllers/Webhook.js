const fs = require("fs");
module.exports = (req, res) => {
    console.log(req.body.resource.amount.total);
    const transactionAmount = Number(req.body.resource.amount.total);
    const fee = transactionAmount * 0.005;
    let contents = String(fs.readFileSync(__dirname + '/../data.json'));
    console.log(contents);
    contents = JSON.parse(contents);
    contents.transactions.push({
        "time": req.body.create_time,
        fee,
        transactionAmount
    });
    console.log(JSON.stringify(contents));
    fs.writeFileSync('./../data.json', JSON.stringify(contents));


    res.json({})
}