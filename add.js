const functions = require('@google-cloud/functions-framework');

// Register a function named 'add' for HTTP trigger
functions.http('add', (req, res) => {
  // Retrieve numbers 'x' and 'y' from the request query parameters or body
  const x = parseInt(req.query.x) || parseInt(req.body.x);
  const y = parseInt(req.query.y) || parseInt(req.body.y);

  // Check if 'x' and 'y' are both integers
  if (isNaN(x) || isNaN(y) || !Number.isInteger(x) || !Number.isInteger(y)) {
    res.status(400).send('The values of x and y must be integers.');
    return;
  }

  // Perform addition
  const result = x + y;

  // Respond with a JSON object containing 'x', 'y', and the 'result'
  res.json({ x, y, result });
});
