const express = require('express'); // Calling a module, like RoR require 'something'
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Connect to Mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {}) // Remote or Local options; vidjot-dev can be any name
  .then(() => console.log('MongoDB Connected'))
  .catch(() => console.log(err)); // Log an error

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (request, response) => {
  const title = 'Welcome';
  response.render('index', {
    title: title
  });
});

// About Route
app.get('/about', (request, response) => {
  response.render('ABOUT');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});