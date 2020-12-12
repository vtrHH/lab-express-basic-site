const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
const app = express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(express.static('public/images'));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/home', (request, response) => {
  response.render('home');
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.get('/work', (request, response) => {
  response.render('work');
});

app.listen(3000);
