const express = require('express'); // Calling a module, like RoR require 'something'
const app = express();
const port = 5000;

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