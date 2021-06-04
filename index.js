const express = require('express');

const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.send([]);
});

app.post('/todo', function (req, res) {
  res.send('success');
});

app.patch('/todo/:id', function (req, res) {
  res.send('success');
});

app.delete('/todo/:id', function (req, res) {
  res.send('success');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
