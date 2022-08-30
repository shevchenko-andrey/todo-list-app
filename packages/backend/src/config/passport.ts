import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../models/User';

const { JWT_SECRET } = process.env;
export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  async (payload: { id: string }, done) => {
    try {
      const user = await User.findById(payload.id);

      if (!user) {
        done(null, false);
        return;
      }
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);
