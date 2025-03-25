interface User {
  id: string
  email: string
  password: string
}

interface UserRepository {
  findByEmail(email: string): Promise<User | null>
}

export default class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // async login(user: User): Promise<User> {
  //   return this.userRepository.createUser(user)
  // }

  // async register(user: User): Promise<User> {
  //   return this.userRepository.createUser(user)
  // }
}
