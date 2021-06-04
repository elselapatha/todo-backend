const express = require('express');

const PORT = 8080;
const app = express();

router.get('/', function (req, res) {
  res.send('Welcome to Todo App');
});

app.use('/todo',require('./services/todo'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
