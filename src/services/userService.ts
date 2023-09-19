import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class UserService {
  private userRepository = getRepository(User);

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async getUserById(userId: number): Promise<User | undefined> {
    return this.userRepository.findOne(userId);
  }

  // Add more methods as needed, such as update and delete users
}

export default UserService;
