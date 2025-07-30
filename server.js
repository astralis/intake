const path = require('path');

module.exports = function(app) {
  app.get('/lists', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
  });
};
