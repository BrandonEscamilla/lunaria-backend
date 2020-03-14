const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const ThreeDModelsSchema = new Schema({
  name: String,
  obj: {
    data: String
  },
  mtl: {
    data: String
  },
  topic: String
});


module.exports = mongoose.model('ThreeDModelsSchema', ThreeDModelsSchema);