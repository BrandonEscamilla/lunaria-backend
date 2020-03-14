const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect('mongodb://lunaria:lunaria2020@ds053784.mlab.com:53784/lunaria-api-v1', { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;
