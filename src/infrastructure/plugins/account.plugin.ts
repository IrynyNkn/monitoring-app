import fp from 'fastify-plugin'

import { UserRepository } from '../repositories/user.repository.js'
import AuthService from '../../services/auth/auth.service.js'

export default fp(async fastify => {
  const repo = new UserRepository()
  const service = new AuthService(fastify, repo)

  fastify.decorate('authService', service)
})

declare module 'fastify' {
  interface FastifyInstance {
    authService: AuthService
  }
}
