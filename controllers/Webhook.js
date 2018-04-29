module.exports = (req, res) => {
    console.log(req.body.resource.amount.total);
    res.json({})
}