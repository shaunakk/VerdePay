module.exports = (req, res) => {
    console.log(req.resource.amount.total);
    res.json({})
}