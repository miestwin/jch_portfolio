const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// const viewsDir = path.join(__dirname, 'views');
// app.use(express.static(viewsDir));

// app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')));
// app.get('/about', (req, res) => res.sendFile(path.join(viewsDir, 'about.html')));
// app.get('/contact', (req, res) => res.sendFile(path.join(viewsDir, 'contact.html')));
// app.get('/admin', (req, res) => res.sendFile(path.join(viewsDir, 'admin.html')));

app.get('/', (req, res, next) => res.render('index', { work: true, layout: 'layout' }));
app.get('/about', (req, res, next) => res.render('about',  { about: true, layout: 'layout' }));
app.get('/contact', (req, res, next) => res.render('contact',  { contact: true, layout: 'layout' }));
// app.get('/admin', (req, res, next) => res.render('admin'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));