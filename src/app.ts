import express, {Request, Response} from 'express';
export {};
import './database'; // Import the database connection
import UserController from './controllers/userController';

const app = express();
const userController = new UserController();

app.use(express.json());

app.post('/users', userController.createUser.bind(userController));

app.get('/users/:id', userController.getUserById.bind(userController));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
