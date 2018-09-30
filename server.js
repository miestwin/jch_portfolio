const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewsDir = path.join(__dirname, 'views');

app.use(express.static(viewsDir));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(viewsDir, 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(viewsDir, 'contact.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(viewsDir, 'admin.html')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));