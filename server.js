// 🔽 Paste this below your static middleware
app.get('/lists', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});