const functions = require('@google-cloud/functions-framework');
// Register a function named 'div' for HTTP trigger
functions.http('div', (req, res) => {
  // Retrieve numbers 'x' and 'y' from the request query parameters or body
  const x = parseInt(req.query.x) || parseInt(req.body.x);
  const y = parseInt(req.query.y) || parseInt(req.body.y);

  // Check if 'x' and 'y' are both integers
  if (isNaN(x) || isNaN(y)) {
    res.status(400).send('The values of x and y must be integers.');
    return;
  }

  // Check if 'y' is zero
  if (y === 0) {
    res.status(400).send('Division by zero is not allowed.');
    return;
  }

  // Perform division
  const result = x / y;

  // Respond with a JSON object containing 'x', 'y', and the 'result'
  res.json({ x, y, result });
});
