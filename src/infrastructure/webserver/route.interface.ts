import { FastifyPluginCallback } from 'fastify'

interface RouteInterface {
  prefix_route: string
  routes: FastifyPluginCallback
}

export default RouteInterface
