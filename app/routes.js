const express = require('express')
const router = express.Router()

// Home page route
router.get('/', function (req, res) {
  res.render('index')
})

// Load versioned routes here
require('./routes/v8/routing.js')(router)

module.exports = router
