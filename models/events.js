const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  description: String,
  speaker: String,//mongoose.Schema.Types.ObjectId,
  image: String
});

module.exports = mongoose.model('Events', EventSchema);