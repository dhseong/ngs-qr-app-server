const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  country: {type: String, required: true},
  countryCode: {type: String, required: true},
  region: {type: String, required: true},
  regionName: {type: String, required: true},
  city: {type: String, required: true},
  zip: {type: String, required: true},
  query: {type: String, required: true}
}, {timestamps: true})

const Client = mongoose.model('Client', clientSchema)

module.exports = {Client}
