//
const mongoose = require('mongoose');

const db = mongoose.connect(
  'mongodb+srv://demoUser:F3TKiO6WX6EaEA5w@development.sky4s.mongodb.net/demo?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on('connected', () => {
  console.log('Db Connected!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

module.exports = db;
