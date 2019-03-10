'use strict'

const redis = require('redis')
const config = require('./config')

const options = {
  host: config.get('REDIS_HOST'),
  port: config.get('REDIS_PORT', 6379),
  password: config.get('REDIS_PASSWORD', false),
  username: config.get('REDIS_USERNAME', false)
}

const client = redis.createClient(options)
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
