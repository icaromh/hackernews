'use strict'

const redis = require('redis')
const client = redis.createClient()
const prefix = `HACKERNEWS_`

const set = (key, value, ttl = 60) => {
  const _key = `${prefix}${key}`
  client.set(_key, value)
  if (ttl > 0) {
    client.expire(_key, ttl)
  }
}

const get = key => {
  const _key = `${prefix}${key}`
  return new Promise((resolve, reject) => {
    client.get(_key, (err, reply) => {
      if (err || reply === null) {
        return reject(new Error('Missing key'))
      }
      return resolve(reply)
    })
  })
}

module.exports = {
  set,
  get
}
