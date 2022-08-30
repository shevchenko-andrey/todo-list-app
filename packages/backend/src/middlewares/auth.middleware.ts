import { Response, Request, NextFunction } from 'express';
import passport from 'passport';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, async (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return res.status(401).json({ message: 'authenticate failed', user });
    }

    req.user = user;
  })(req, res, next);
};
