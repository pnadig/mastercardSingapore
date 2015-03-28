'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NonprofitSchema = new Schema({
  name: String,
  category: String,
  image: String,
  description: String
});

module.exports = mongoose.model('Nonprofit', NonprofitSchema);
