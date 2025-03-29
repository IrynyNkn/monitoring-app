import { FastifyInstance } from 'fastify'
import { UserInterface } from '../../domain/interface/user.interface.js'
import { UserRepositoryInterface } from '../../infrastructure/repositories/user.repository.js'

class AuthService {
  constructor(
    private readonly fastify: FastifyInstance,
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async login(email: string): Promise<{ token: string }> {
    const token = this.fastify.jwt.sign(
      { id: email, email },
      { expiresIn: '1d' },
    )
    return { token }
  }

  async register(email: string): Promise<UserInterface | null> {
    return this.userRepository.findByEmail(email)
  }

  async findMe(email: string): Promise<UserInterface | null> {
    return this.userRepository.findByEmail(email)
  }
}

export default AuthService
