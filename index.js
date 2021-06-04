const cors=require('cors')
const logger = require("morgan");
const express = require('express');
const bodyParser = require("body-parser");

const PORT = 8080;
const app = express();

app.use(cors())
app.use(logger("dev"));
app.use(bodyParser.json());

require('./src/helpers/db.helper')

app.get('/', function (req, res) {
  res.send('Welcome to Todo App');
});

app.use('/todo',require('./src/router/todo.router'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
