const express = require('express');
const checkAuth = require('./middleware/check-auth');
const app = express();

const token = require('./routes/token');
const alerts = require('./routes/alerts');
const user = require('./routes/user');


app.use(express.static('angular8-sample-app'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/token', token);
app.use('/api/alert', alerts);
app.use('/api/user', user);

module.exports = app;