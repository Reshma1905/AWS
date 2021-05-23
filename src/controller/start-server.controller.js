const serverController = ((req, res) => {
    res.status(200).send('Node Server Started !!!');
});

module.exports = serverController;