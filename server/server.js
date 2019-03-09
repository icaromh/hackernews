'use strict'

const express = require('express')
const session = require('express-session')
const grant = require('grant-express')

/**
 * ROUTES
 */
const authenticateRoute = require('./routes/authenticate')
const storiesRoute = require('./routes/stories')
const commentsRoute = require('./routes/comments')

const config = require('./services/config')

const configure = (app) => {
  app.use(session({ secret: 'grant' }))
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

const bindRoutes = (app) => {
  app.use('/authenticate', authenticateRoute)
  app.use('/stories', storiesRoute)
  app.use('/comments', commentsRoute)

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
