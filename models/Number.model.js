const mongoose = require('mongoose')

const NumberSchema = new mongoose.Schema(
  {
    alphabet: String,
    value: Number
  },
  { timestamps: true }
)

module.exports= mongoose.model('Number', NumberSchema)
