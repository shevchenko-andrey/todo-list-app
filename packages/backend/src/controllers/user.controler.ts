import { Request } from 'express';
import UserService from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  register = (req: Request) => this.userService.register(req.body);

  login = (req: Request) => this.userService.login(req.body);
}
const userController = new UserController(new UserService());
export default userController;
