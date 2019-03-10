class RepositoryBase {
  constructor (cacheClient, apiClient) {
    this.cache = cacheClient
    this.api = apiClient
  }

  getHeadTail (page, limit) {
    let head = 0
    let tail = limit

    if (page && page > 1) {
      head = (page - 1) * limit
      tail = ((page - 1) * limit) + limit
    }

    return {
      head, tail
    }
  }

  /**
   * Get Data from API and cachet-it
   * @param {String} endpoint
   * @param {String} cacheKey
   * @param {Number} cacheTTL
   */
  async getData (endpoint, cacheKey, cacheTTL) {
    let data = []
    try {
      data = await this.cache.get(cacheKey)
      data = JSON.parse(data)
    } catch (err) {
      data = false
    }

    if (!data) {
      try {
        data = await this.api.fetch(endpoint)
      } catch (err) {
        return err
      }

      this.cache.set(cacheKey, JSON.stringify(data), cacheTTL)
    }

    return data
  }
}

module.exports = RepositoryBase
