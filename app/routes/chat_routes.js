var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    ///
    ///Work with users CRUD
    ///

    app.post('/users', (req, res) => {
        const user = { firstname: req.body.firstname, lastname: req.body.lastname };
        db.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('User ' + id + ' deleted!');
            }
        });
    });
    app.put('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const user = { firstname: req.body.firstname, lastname: req.body.lastname };
        db.collection('users').update(details, user, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(user);
            }
        });
    });

    ///
    ///Work with messages CRUD
    ///

    app.post('/users/message', (req, res) => {
        const user = { senderId: req.body.senderId, receiverId: req.body.receiverId, text: req.body.text };
        db.collection('message').insert(user, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/users/message/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('message').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.delete('/users/message/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('message').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Message ' + id + ' deleted!');
            }
        });
    });
    app.put('/users/message/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const message = { firstname: req.body.firstname, lastname: req.body.lastname };
        db.collection('message').update(details, message, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(message);
            }
        });
    });
};