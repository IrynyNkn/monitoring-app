import fastify from 'fastify'

import authRoute from './interface/routes/auth.route.js'

const server = fastify()

server.register(authRoute, { prefix: '/auth' })

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
