import { UserInterface } from '../../domain/interface/user.interface.js'

export interface UserRepositoryInterface {
  findByEmail(email: string): Promise<UserInterface | null>
}

export class UserRepository implements UserRepositoryInterface {
  async findByEmail(email: string): Promise<UserInterface | null> {
    console.log('email', email)
    return {
      id: '1',
      email: 'test@test.com',
      password: 'password',
    }
  }
}
