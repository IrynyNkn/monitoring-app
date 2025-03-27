import { FastifyPluginAsync, FastifyPluginCallback } from 'fastify'

import AuthController from '../controller/auth/auth.controller.js'
import RouteInterface from '../../infrastructure/webserver/route.interface.js'

const userRoutes: FastifyPluginAsync = async fastify => {
  fastify.get('/me', AuthController.getMe)

  fastify.post('/login', AuthController.login)

  fastify.post('/register', AuthController.register)
}

class AuthRoute implements RouteInterface {
  public prefix_route: string = '/auth'
  public routes: FastifyPluginCallback = userRoutes
}

export default AuthRoute
