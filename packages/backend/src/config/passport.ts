import { ExtractJwt, Strategy } from 'passport-jwt';
import User, { IUser } from '../models/User';

const { JWT_SECRET } = process.env;
export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  async (payload: IUser, done) => {
    try {
      const user = await User.findById(payload._id);
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);
