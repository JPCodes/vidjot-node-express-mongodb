const express = require('express'); // Calling a module, like RoR require 'something'
const app = express();
const port = 5000;

app.use(function(req, res, next) { // Simple piece of middleware
  console.log(Date.now());
  req.name = "James P";
  next();
});

// Index Route
app.get('/', (request, response) => {
  console.log(request.name); // Simple use of middleware var
  response.send('INDEX');
});

// About Route
app.get('/about', (request, response) => {
  response.send('ABOUT');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});