const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001; // Changed port to 5001

app.use(bodyParser.json());
app.use(cors());

// Dummy route for testing
app.get('/', (req, res) => {
  res.send('Career Pathway App Backend');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
