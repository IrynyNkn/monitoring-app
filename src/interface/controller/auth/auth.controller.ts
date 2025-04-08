import { FastifyReply, FastifyRequest } from 'fastify'

class AuthController {
  static async register(request: FastifyRequest, reply: FastifyReply) {
    const data = await request.server.pg.query('SELECT * FROM user')
    return reply.status(200).send({ data })
  }

  static async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email } = request.body as { email: string }
      const { token } = await request.server.authService.login(email)
      return reply.code(200).send({ token })
    } catch {
      return reply.code(500).send({ message: 'Internal server error' })
    }
  }

  static async getMe(request: FastifyRequest, reply: FastifyReply) {
    const user = await request.server.authService.findMe('test@test.com')
    return reply
      .status(200)
      .send({ data: user, tokenEmail: request.user.email })
  }
}

export default AuthController
