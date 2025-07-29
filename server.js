const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 🔽 Paste this below your static middleware
app.get('/lists', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

// Optional: other routes or APIs
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
