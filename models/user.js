const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  clientId: {type: String, required: true},
  clientName: {type: String, required: false},
  email: {type: String, required: true},
  userId: {type: String, required: true},
  username: {type: String, required: true},
  value: {type: String, required: true}
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = {User}
