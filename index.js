require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./app/router');
const sanitizer = require('sanitizer');
const port = process.env.PORT || 3000;

app.locals.appDesc = {
    appName: 'RapidCoin',
    appFirstname: 'Rapid',
    appLastname: 'Coin',
};

app.use ((req, res, next) => {
    res.locals.url = req.originalUrl;
    res.locals.host = req.get('host');
    res.locals.protocol = req.protocol;
    next();
});

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    for(const key in req.body) {
        req.body[key] = sanitizer.escape(req.body[key]);
    }
    next();
});

app.use(router);

app.listen(port, _ => console.log(`Listening on http://localhost:${port}`));