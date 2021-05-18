const express = require('express')

// Create express instance
const app = express()

// Require API routes
// const users = require('./routes/users')
const routes = require('./routes/routes')

// Import API Routes
// app.use(users)
app.use(express.json())
app.use(express.urlencoded())
app.use(routes)

// require('./routes/routes')(app)

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app