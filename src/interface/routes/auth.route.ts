import { FastifyPluginAsync } from 'fastify'

import AuthController from '../controller/auth/auth.controller.js'

const userRoutes: FastifyPluginAsync = async fastify => {
  fastify.get('/me', AuthController.getMe)

  fastify.post('/login', AuthController.login)

  fastify.post('/register', AuthController.register)
}

export default userRoutes
