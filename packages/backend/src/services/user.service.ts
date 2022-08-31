import Jwt from 'jsonwebtoken';
import bcript from 'bcryptjs';
import { Conflict, Unauthorized } from 'http-errors';
import User, { IUser } from '../models/User';

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

export default class UserService {
  generatorAccessToken(id: string) {
    return Jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  }

  async register(newUser: IUser) {
    const { email, password, username } = newUser;

    const candidate = await User.findOne({ email });

    if (candidate) {
      throw new Conflict('this user email aleady used');
    }

    const user = await User.create({
      email,
      password,
      username
    });
    return { _id: user._id, email: user.email };
  }

  async login(candUser: IUser) {
    const { email, password } = candUser;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Unauthorized('invalid credentials');
    }

    const { _id: id } = user;

    const isMuchPassword = bcript.compareSync(password, user.password);

    if (!isMuchPassword) {
      throw new Unauthorized('invalid credentials');
    }

    const accessToken = this.generatorAccessToken(id);

    const bearerToken = `Bearer ${accessToken}`;

    return { token: bearerToken };
  }
}
