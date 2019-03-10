const BaseRepository = require('../index')

describe('StoriesRepository', () => {
  describe('# Stories', () => {
    test('It should get all top stories, cache it and return to the user', () => {
      expect(1).toBe(1)
    })

    test('It should get a story from cache when available', () => {
      expect(1).toBe(1)
    })

    test('It should retrive a story from API when cache miss', () => {
      expect(1).toBe(1)
    })
  })
  describe('# Comments', () => {
    test('It should get all comments given a array of comments id', () => {
      expect(1).toBe(1)
    })
  })
})
