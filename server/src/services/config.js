const validate = () => {
  const required = [
    'GITHUB_CLIENT_KEY',
    'GITHUB_SECRET_KEY',
    'REDIS_HOST',
    'REDIS_PORT'
  ]

  required.forEach(key => {
    if (!process.env.hasOwnProperty(key)) {
      throw new Error(`Missing ${key} envirionment variable`)
    }
  })
}

const get = (key, defaultValue) => {
  return process.env[key] || defaultValue
}

module.exports = {
  validate,
  get
}
