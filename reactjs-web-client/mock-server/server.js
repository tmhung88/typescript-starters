const jsonServer = require('json-server')
const db = require('./db.js')()
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(5000, function() {
  console.log('JSON Server is running at port 5000')
  console.log('====== Resources ======')
  console.log('http://localhost:5000/posts')
  console.log('http://localhost:5000/comments')
  console.log('http://localhost:5000/profile')

  console.log(
    'To add more data, create json files and place them ./mock-server/data',
  )
})
