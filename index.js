const express = require('express');

const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send([]);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
