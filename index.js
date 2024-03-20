
const express = require('express');
const authorRouter = require('./authorRouter'); // Link the router
const logger = require("./logger");  // 


const app = express();
const port = 8000; // Adjust port as needed

// Global middleware for simple logging (replace with a more robust logger)
app.use(logger);
// Mount the author router on a specific path 
app.use('/api/authors', authorRouter);

// Error handling middleware (optional, but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})