const express = require('express')
const { getAlphabets } = require('../controllers/numberController')
const numberRouter = express.Router()

numberRouter.get('/alphabets', getAlphabets)
module.exports = numberRouter