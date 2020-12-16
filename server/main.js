const db = require('./db')
const server = require('./index')
const PORT = 1337

db.sync()
  .then(() => {
    server.listen(PORT, () => console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `))
  })