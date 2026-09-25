const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('hiiiii not sending the index.html file btw')
  // res.sendFile(path.join(__dirname, 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
  });
}

module.exports = app;
