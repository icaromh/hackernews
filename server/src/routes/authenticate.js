'use strict'

const router = require('express').Router()
const cache = require('../services/cache')

router.get('/', (req, res) => {
  const token = req.query.access_token

  if (token) {
    cache.set(token, '1', 0)
    return res.redirect(`http://localhost:3000/?token=${token}`)
  }

  return res.status(401).send('Error')
})

module.exports = router
