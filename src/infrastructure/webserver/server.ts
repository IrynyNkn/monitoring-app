import fastify, { FastifyInstance, FastifyPluginAsync } from 'fastify'

import config from '../config/config.js'
import RouteInterface from './route.interface.js'

class App {
  public app: FastifyInstance
  public app_domain: string = config.app.domain
  public app_port: number = config.app.port

  constructor(appInit: {
    plugins: FastifyPluginAsync[]
    routes: Array<new () => RouteInterface>
  }) {
    this.app = fastify({
      logger: true,
    })

    this.register(appInit.plugins)
    this.routes(appInit.routes)
  }

  private register(plugins: {
    forEach: (arg0: (plugin: FastifyPluginAsync) => void) => void
  }) {
    plugins.forEach(plugin => {
      this.app.register(plugin)
    })
  }

  public routes<T extends RouteInterface>(routes: {
    forEach: (arg0: (route: new () => T) => void) => void
  }) {
    routes.forEach(Route => {
      const router = new Route()
      this.app.register(router.routes, { prefix: router.prefix_route })
    })
    // this.app.get('/healthcheck', async (request, reply) => {
    //   reply.send({ healthcheck: 'server is alive' })
    // })
  }

  public listen() {
    this.app.listen({ port: this.app_port }, err => {
      if (err) {
        this.app.log.fatal({ msg: `Application startup error`, err })
        process.exit(1)
      }

      console.log(
        `App listening on the http://${this.app_domain}:${this.app_port} 🚀`,
      )
    })
  }
}

export default App
