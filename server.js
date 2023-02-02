const fs = require('fs')
const router = require('./router/router')
const express = require('express')
const app = express()
const PORT = 4000
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

async function run () {
  try {
    await mongoose.connect('mongodb://localhost:27017')
    app.use('/', router)
    app.listen(PORT, () => {
      console.log(`server is running on port no:${PORT}`)
    })
  } catch (error) {
    console.log('server is not running at port 8000' + error)
  }
}
run()
