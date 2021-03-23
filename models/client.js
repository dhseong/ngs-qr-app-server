const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  ip: {type: String, required: true},
  country: {type: String, required: true},
  country_name: {type: String, required: true},
  country_code: {type: String, required: true},
  region: {type: String, required: false},
  region_code: {type: String, required: false},
  city: {type: String, required: false},
  postal: {type: String, required: false}
}, {timestamps: true})

const Client = mongoose.model('Client', clientSchema)

module.exports = {Client}
