import fp from 'fastify-plugin'
import fastifyPg from '@fastify/postgres'

export default fp(async fastify => {
  fastify.register(fastifyPg, {
    connectionString: process.env.DATABASE_URL,
  })
})
