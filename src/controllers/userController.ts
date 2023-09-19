import UserService from '../services/userService';
import { Request, Response } from 'express';

const userService = new UserService();

class UserController {
  
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { username, email } = req.body;
      const user = await userService.createUser({ username, email });
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await userService.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ error: 'An error occurred while getting the user.' });
    }
  }

  // Add more controller methods for other user-related actions
}

export default UserController;
