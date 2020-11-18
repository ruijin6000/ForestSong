

module.exports = app => {

    app.get('/test', (req, res) => {
        res.send('Thanks for testing');
    });

}