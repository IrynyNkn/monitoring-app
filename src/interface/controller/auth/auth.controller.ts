import { FastifyReply, FastifyRequest } from 'fastify'

class AuthController {
  static async register(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({ message: 'Register successful' })
  }

  static async login(request: FastifyRequest, reply: FastifyReply) {
    // try {
    //   const { email, password } = request.body as UserInterface
    //   const user = await VerifyUser(email, password)
    //   const token = await reply.jwtSign(user)
    //   return reply.code(200).send({ messsage: 'Login berhasil.', data: user, token })
    // } catch (error) {
    //   return reply.code(500).send({ message: error.message })
    // }
    return reply.status(200).send({ message: 'Login successful' })
  }

  static async getMe(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({ message: 'Get me successful' })
  }
}

export default AuthController
