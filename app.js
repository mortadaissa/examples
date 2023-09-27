const express = require('express');
const app = express();
const port = 3000;

// Serve static HTML files
app.use(express.static('public'));

// Define a route to handle the addition
app.get('/add', (req, res) => {
  // Get the query parameters (numbers to add)
  const num1 = parseFloat(req.query.num1) || 0;
  const num2 = parseFloat(req.query.num2) || 0;

  // Calculate the sum
  const sum = num1 + num2;

  // Send the result as JSON
  res.json({ result: sum });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
