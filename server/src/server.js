'use strict'

const express = require('express')
const session = require('express-session')
const grant = require('grant-express')
const cors = require('cors')

/**
 * ROUTES
 */
const authenticateRoute = require('./routes/authenticate')
const storiesRoute = require('./routes/stories')
const commentsRoute = require('./routes/comments')

const config = require('./services/config')
const cache = require('./services/cache')

const configure = (app) => {
  const corsOptions = {
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'OPTIONS'],
    'preflightContinue': true,
    // origin: config.get('CLIENT_URL'),
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(session({ secret: 'grant' }))
  app.use(cors(corsOptions))
  app.use(grant({
    'defaults': {
      'protocol': 'http',
      'host': config.get('APP_HOST', 'localhost:3001'),
      'state': true
    },
    'github': {
      'key': config.get('GITHUB_CLIENT_KEY'),
      'secret': config.get('GITHUB_SECRET_KEY'),
      'scope': [
        'public_repos'
      ],
      'callback': '/authenticate'
    }
  }))

  return app
}

const authMiddleware = async (req, res, next) => {
  if (req.method !== 'GET') return next()
  if (!req.headers.authorization) return res.status(401).send()

  try {
    const token = req.headers.authorization.split(' ')[1]
    let isValid = await cache.get(token)
    if (isValid) return next()
  } catch (err) {
    return res.status(401).send()
  }

  return next()
}

const bindRoutes = (app) => {
  app.use('/authenticate', authenticateRoute)
  app.use('/stories', authMiddleware, storiesRoute)
  app.use('/comments', authMiddleware, commentsRoute)

  return app
}

const start = () => {
  const port = config.get('PORT', 3001)
  let _express = express()
  _express = configure(_express)
  const app = bindRoutes(_express)

  app.listen(port, () => console.log(`Running in ${port}!`))
}

module.exports = start
