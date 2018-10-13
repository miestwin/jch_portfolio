require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

const aboutController = require('./controllers/about');
const contactController = require('./controllers/contact');
const galleryController = require('./controllers/gallery');
const workController = require('./controllers/work');

const app = express();

const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', galleryController);
app.use('/about', aboutController);
app.use('/contact', contactController);
app.use('/work', workController);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;

    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));