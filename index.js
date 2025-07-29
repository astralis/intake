const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 🔽 Import routes from server.js
require('./server')(app);

app.get('/', (req, res) => {
  res.send('Intake backend is running!');
});

app.post('/submit-intake', (req, res) => {
  const data = req.body;
  console.log('Received intake:', data);
  res.status(200).json({ message: 'Intake received', data });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});