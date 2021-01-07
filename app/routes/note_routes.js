var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    app.get('/user/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('user').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.post('/user', (req, res) => {
        const note = { name: req.body.name, age: req.body.age };
        db.collection('user').insertOne(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};