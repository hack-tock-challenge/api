const debug = require('debug')('ouich:api')
const express = require('express')
const questionController = require('./src/controller/question')
const userController = require('./src/controller/user')

const app = express()

app.use('/question', questionController)
app.use('/user', userController)


app.use(function (err, req, res, next) {
  if (err) res.status(500).send(err)
})


try {
  const server = app.listen(process.env.PORT || null, '127.0.0.1', () => {
    debug("Listening on port " + server.address().port)
  })
} catch (error) {
  debug('Houston, we got a server problem... %O', error)
}
