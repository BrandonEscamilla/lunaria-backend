const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const SpeakerSchema = new Schema({
  name: String,
  career: String,
  bio: String
});

module.exports = mongoose.model('Speaker', SpeakerSchema);