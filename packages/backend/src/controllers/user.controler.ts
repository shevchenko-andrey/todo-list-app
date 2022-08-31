import { Request } from 'express';
import { IUser } from '../models/User';
import UserService from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  async register(req: Request<{}, IUser>) {
    return this.userService.register(req.body);
  }

  async login(req: Request<{}, IUser>) {
    return this.userService.login(req.body);
  }
}
const userController = new UserController(new UserService());
export default userController;
