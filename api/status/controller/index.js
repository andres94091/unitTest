async function status(req, res) {
    res.json({
        service: "ok"
    }).status(200)
}

module.exports = {
    status
}