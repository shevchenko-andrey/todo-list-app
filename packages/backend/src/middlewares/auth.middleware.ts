import { Response, Request, NextFunction } from 'express';
import passport from 'passport';
import { IUser } from '../models/User';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, async (error, user: IUser) => {
    if (error) {
      return res.json(error);
    }
    if (!user) {
      return res.status(401).json({ message: 'authenticate failed' });
    }
    req.user = user._id;

    next();
  })(req, res, next);
};
