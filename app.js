const express = require('express'); // Calling a module, like RoR require 'something'
const exphbs = require('express-handlebars');
const app = express();
const port = 5000;

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (request, response) => {
  response.send('INDEX');
});

// About Route
app.get('/about', (request, response) => {
  response.send('ABOUT');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});