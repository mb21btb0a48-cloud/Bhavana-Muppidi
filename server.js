// server.js
const express = require('express');
const cors = require('cors');
// Using port 3001 to avoid conflict with React's default 3000
const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Basic test route
app.get('/', (req, res) => {
  res.send('InfoHub Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});