'use strict'

const cache = require('../services/cache')
const Api = require('../services/api')
const RepositoryBase = require('./')
const {
  STORIES_CACHE_KEY,
  STORY_CACHE_KEY,
  STORIES_COMMENTS_CACHE_KEY,
  STORIES_TTL,
  COMMENTS_TTL,
  STORIES_PER_PAGE
} = require('../contants')

class StoriesRepository extends RepositoryBase {
  async getTopStories () {
    return this.getData('topstories', STORIES_CACHE_KEY, STORIES_TTL)
  }

  async getStoryContent (id) {
    return this.getData(`item/${id}`, `${STORY_CACHE_KEY}${id}`, STORIES_TTL)
  }

  async getCommentsData (id) {
    return this.getData(`item/${id}`, `${STORIES_COMMENTS_CACHE_KEY}${id}`, COMMENTS_TTL)
  }

  /**
   * Get all comments from an array
   * @param {Array} comments List of ids of comments
   */
  async getComments (comments = []) {
    const promises = comments.map(id => {
      return this.getCommentsData(id)
    })

    return Promise.all(promises)
  }

  async getAll (page) {
    const { head, tail } = this.getHeadTail(page, STORIES_PER_PAGE)
    const stories = await this.getTopStories()
    const storiesToFetch = stories.slice(head, tail)
    const storiesPromises = storiesToFetch.map(id => {
      return this.getStoryContent(id)
    })
    return Promise.all(storiesPromises)
  }

  async get (id) {
    return this.getStoryContent(id)
  }
}

module.exports = new StoriesRepository(cache, Api)
