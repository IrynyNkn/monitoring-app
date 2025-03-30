import fp from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt'
import { FastifyRequest, FastifyReply } from 'fastify'

import { UserJwt } from '../../domain/interface/UserJwt.interface.js'

export default fp(async fastify => {
  fastify.register(fastifyJwt, {
    secret: 'supersecret',
  })

  fastify.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    },
  )
})

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: UserJwt
    user: Partial<UserJwt>
  }
}
