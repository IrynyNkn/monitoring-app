import fp from 'fastify-plugin'
import { PoolClient } from 'pg'

export default fp(async fastify => {
  const client = await fastify.pg.connect()
  fastify.decorate('pgClient', client)
})

declare module 'fastify' {
  interface FastifyInstance {
    pgClient: PoolClient
  }
}
