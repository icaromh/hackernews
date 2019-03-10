'use strict'

const StoriesRepository = require('../repositories/stories')
const router = require('express').Router()

router.get(['/:id'], async (req, res) => {
  const { id } = req.params
  const story = await StoriesRepository.get(id)
  const items = await StoriesRepository.getComments(story.kids)

  res.send({
    items
  })
})

module.exports = router
