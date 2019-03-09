'use strict'

const StoriesRepository = require('../repositories/stories')
const { STORIES_PER_PAGE } = require('../contants')
const router = require('express').Router()

router.get(['/', '/:page'], async (req, res) => {
  const limit = STORIES_PER_PAGE
  const { page = 1 } = req.params
  const items = await StoriesRepository.getAll(page)

  res.send({
    items,
    metadata: {
      limit,
      page
    }
  })
})

module.exports = router
