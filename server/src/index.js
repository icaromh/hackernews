'use strict'

require('dotenv').config()
require('./services/config').validate()

const startServer = require('./server')

startServer()
