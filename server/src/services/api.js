const axios = require('axios')

const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0'

/**
 * Build the final URL.
 * @param {String} endpoint the endpoint. It could be the commentID, the storieID or "topstories"
 */
const getURLFor = endpoint => (`${BASE_API_URL}/${endpoint}.json`)

/**
 * Fetch data from HackerNews API.
 * @param {String} endpoint the endpoint. It could be the commentID, the storieID or "topstories"
 */
const fetch = endpoint => {
  const url = getURLFor(endpoint)
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        if (res.status !== 200 || !res.data) {
          return reject(new Error(`Received ${res.status} on ${url}`))
        }
        return resolve(res.data)
      })
      .catch(reject)
  })
}

module.exports = {
  getURLFor,
  fetch
}
